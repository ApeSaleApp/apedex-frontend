import { ChainId, Token } from '@apeswapfinance/sdk'
import { Tags, TokenInfo, TokenList } from '@uniswap/token-lists'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { CHAIN_ID } from 'config/constants/chains'

import { createSelector } from '@reduxjs/toolkit'
import { fromPairs, groupBy, uniqBy } from 'lodash'
import DEFAULT_TOKEN_LIST from 'config/constants/token-lists/apeswap.json'
import { UNSUPPORTED_LIST_URLS, DEFAULT_LIST_OF_LISTS } from 'config/constants/lists'
import UNSUPPORTED_TOKEN_LIST from 'config/constants/token-lists/sushiswap-v2-unsupported.tokenlist.json'
import { AppState } from '../index'

type TagDetails = Tags[keyof Tags]
export interface TagInfo extends TagDetails {
  id: string
}

// use ordering of default list of lists to assign priority
function sortByListPriority(urlA: string, urlB: string) {
  const first = DEFAULT_LIST_OF_LISTS.includes(urlA) ? DEFAULT_LIST_OF_LISTS.indexOf(urlA) : Number.MAX_SAFE_INTEGER
  const second = DEFAULT_LIST_OF_LISTS.includes(urlB) ? DEFAULT_LIST_OF_LISTS.indexOf(urlB) : Number.MAX_SAFE_INTEGER

  // need reverse order to make sure mapping includes top priority last
  if (first < second) return 1
  if (first > second) return -1
  return 0
}

function enumKeys<O extends Record<string, unknown>, K extends keyof O = keyof O>(obj: O): K[] {
  return Object.keys(obj).filter((k) => Number.isNaN(+k)) as K[]
}

// -------------------------------------
//   Selectors
// -------------------------------------
const selectorActiveUrls = (state: AppState) => state.lists.activeListUrls
const selectorByUrls = (state: AppState) => state.lists.byUrl
const activeListUrlsSelector = createSelector(selectorActiveUrls, (urls) =>
  urls?.filter((url) => !UNSUPPORTED_LIST_URLS.includes(url)),
)

/**
 * Token instances created from token info.
 */
export class WrappedTokenInfo extends Token {
  public readonly tokenInfo: TokenInfo

  public readonly tags: TagInfo[]

  constructor(tokenInfo: TokenInfo, tags: TagInfo[]) {
    super(tokenInfo.chainId, tokenInfo.address, tokenInfo.decimals, tokenInfo.symbol, tokenInfo.name)
    this.tokenInfo = tokenInfo
    this.tags = tags
  }

  public get logoURI(): string | undefined {
    return this.tokenInfo.logoURI
  }
}

export type TokenAddressMap = Readonly<{
  [chainId in ChainId]: Readonly<{ [tokenAddress: string]: { token: WrappedTokenInfo; list: TokenList } }>
}>

/**
 * An empty result, useful as a default.
 */
const EMPTY_LIST: TokenAddressMap = {
  [ChainId.MAINNET]: {},
  [ChainId.MATIC]: {},
  [ChainId.MATIC_TESTNET]: {},
  [ChainId.BSC]: {},
  [ChainId.BSC_TESTNET]: {},
}

const listCache: WeakMap<TokenList, TokenAddressMap> | null =
  typeof WeakMap !== 'undefined' ? new WeakMap<TokenList, TokenAddressMap>() : null

const combineTokenMapsWithDefault = (lists: AppState['lists']['byUrl'], urls: string[]) => {
  const defaultTokenMap = listToTokenMap(DEFAULT_TOKEN_LIST)
  if (!urls) return defaultTokenMap
  return combineMaps(combineTokenMaps(lists, urls), defaultTokenMap)
}

const combineTokenMaps = (lists: AppState['lists']['byUrl'], urls: string[]) => {
  if (!urls) return EMPTY_LIST
  return (
    urls
      .slice()
      // sort by priority so top priority goes last
      .sort(sortByListPriority)
      .reduce((allTokens, currentUrl) => {
        const current = lists[currentUrl]?.current
        if (!current) return allTokens
        try {
          const newTokens = Object.assign(listToTokenMap(current))
          return combineMaps(allTokens, newTokens)
        } catch (error) {
          console.error('Could not show token list due to error', error)
          return allTokens
        }
      }, EMPTY_LIST)
  )
}

export const combinedTokenMapFromUnsupportedUrlsSelector = createSelector([selectorByUrls], (lists) => {
  // get hard coded unsupported tokens
  const localUnsupportedListMap = listToTokenMap(UNSUPPORTED_TOKEN_LIST)
  // get any loaded unsupported tokens
  const loadedUnsupportedListMap = combineTokenMaps(lists, UNSUPPORTED_LIST_URLS)

  return combineMaps(localUnsupportedListMap, loadedUnsupportedListMap)
})

export const combinedTokenMapFromActiveUrlsSelector = createSelector(
  [selectorByUrls, selectorActiveUrls],
  (lists, urls) => {
    return combineTokenMapsWithDefault(lists, urls)
  },
)

const inactiveUrlSelector = createSelector([selectorByUrls, selectorActiveUrls], (lists, urls) => {
  return Object.keys(lists).filter((url) => !urls?.includes(url) && !UNSUPPORTED_LIST_URLS.includes(url))
})

export const combinedTokenMapFromInActiveUrlsSelector = createSelector(
  [selectorByUrls, inactiveUrlSelector],
  (lists, inactiveUrl) => {
    return combineTokenMaps(lists, inactiveUrl)
  },
)

export function listToTokenMap(list: TokenList): TokenAddressMap {
  const result = listCache?.get(list)
  if (result) return result

  const tokenMap: WrappedTokenInfo[] = uniqBy(
    list.tokens,
    (tokenInfo) => `${tokenInfo.chainId}#${tokenInfo.address}`,
  ).map((tokenInfo) => {
    const tags: TagInfo[] =
      tokenInfo.tags
        ?.map((tagId) => {
          if (!list.tags?.[tagId]) return undefined
          return { ...list.tags[tagId], id: tagId }
        })
        ?.filter((x): x is TagInfo => Boolean(x)) ?? []

    return new WrappedTokenInfo(tokenInfo, tags)
  })

  const groupedTokenMap: { [chainId: string]: WrappedTokenInfo[] } = groupBy(tokenMap, (tokenInfo) => tokenInfo.chainId)

  const tokenAddressMap = fromPairs(
    Object.entries(groupedTokenMap).map(([chainId, tokenInfoList]) => [
      chainId,
      fromPairs(tokenInfoList.map((tokenInfo) => [tokenInfo.address, { token: tokenInfo, list }])),
    ]),
  ) as TokenAddressMap

  // add chain id item if not exist
  enumKeys(ChainId).forEach((chainId) => {
    if (!(ChainId[chainId] in tokenAddressMap)) {
      Object.defineProperty(tokenAddressMap, ChainId[chainId], {
        value: {},
      })
    }
  })

  listCache?.set(list, tokenAddressMap)
  return tokenAddressMap
}

export function useAllLists(): {
  readonly [url: string]: {
    readonly current: TokenList | null
    readonly pendingUpdate: TokenList | null
    readonly loadingRequestId: string | null
    readonly error: string | null
  }
} {
  return useSelector<AppState, AppState['lists']['byUrl']>((state) => state.lists.byUrl)
}

function combineMaps(map1: TokenAddressMap, map2: TokenAddressMap): TokenAddressMap {
  return {
    [ChainId.MAINNET]: { ...map1[ChainId.MAINNET], ...map2[ChainId.MAINNET] }, // mainnet
    [ChainId.MATIC]: { ...map1[ChainId.MATIC], ...map2[ChainId.MATIC] }, // matic
    [ChainId.MATIC_TESTNET]: { ...map1[ChainId.MATIC_TESTNET], ...map2[ChainId.MATIC_TESTNET] }, // matic testnet
    [ChainId.BSC]: { ...map1[ChainId.BSC], ...map2[CHAIN_ID.BSC] }, // bsc
    [ChainId.BSC_TESTNET]: { ...map1[ChainId.BSC_TESTNET], ...map2[ChainId.BSC_TESTNET] }, // bsc testnet
  }
}

// filter out unsupported lists
export function useActiveListUrls(): string[] | undefined {
  return useSelector(activeListUrlsSelector)
}

export function useInactiveListUrls(): string[] {
  const lists = useAllLists()
  const allActiveListUrls = useActiveListUrls()
  return Object.keys(lists).filter((url) => !allActiveListUrls?.includes(url) && !UNSUPPORTED_LIST_URLS.includes(url))
}

// get all the tokens from active lists, combine with local default tokens
export function useCombinedActiveList(): TokenAddressMap {
  const activeTokens = useSelector(combinedTokenMapFromActiveUrlsSelector)
  return activeTokens
}

// all tokens from inactive lists
export function useCombinedInactiveList(): TokenAddressMap {
  return useSelector(combinedTokenMapFromInActiveUrlsSelector)
}

// used to hide warnings on import for default tokens
export function useDefaultTokenList(): TokenAddressMap {
  return listToTokenMap(DEFAULT_TOKEN_LIST)
}

// list of tokens not supported on interface, used to show warnings and prevent swaps and adds
export function useUnsupportedTokenList(): TokenAddressMap {
  return useSelector(combinedTokenMapFromUnsupportedUrlsSelector)
}
export function useIsListActive(url: string): boolean {
  const activeListUrls = useActiveListUrls()
  return useMemo(() => Boolean(activeListUrls?.includes(url)), [activeListUrls, url])
}
