/** @jsxImportSource theme-ui */
import { HelpIcon, TooltipBubble } from '@ape.swap/uikit'
import { Trade } from '@apeswapfinance/sdk'
import { useTranslation } from 'contexts/Localization'
import React, { useMemo, useState } from 'react'
import { Divider } from 'theme-ui'
import { Field, SwapDelay, RouterTypeParams } from 'state/swap/actions'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { RouterTypes } from 'config/constants'
import { CHAIN_PARAMS } from 'config/constants/chains'
import { dexStyles } from 'views/Dex/styles'
import FormattedPriceImpact from 'views/LegacyOrders/components/FormattedPriceImpact'
import { AnimatePresence, motion } from 'framer-motion'
import { computeTradePriceBreakdown, computeSlippageAdjustedAmounts } from 'utils/prices'
import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import { Svg } from 'components/Svg'
import TradePrice from './TradePrice'
import { styles } from './styles'

const DexTradeInfo: React.FC<{
  trade: Trade
  allowedSlippage: number
  bestRoute: RouterTypeParams
  swapDelay?: SwapDelay
  onSetSwapDelay?: (swapDelay: SwapDelay) => void
  open?: boolean
}> = ({ trade, allowedSlippage, swapDelay, bestRoute, open = false }) => {
  const { chainId } = useActiveWeb3React()
  const [showMore, setShowMore] = useState(open)
  const isBonusRouter = bestRoute.routerType === RouterTypes.BONUS
  const isSmartRouter = bestRoute.routerType === RouterTypes.SMART
  const { t } = useTranslation()
  const [showInverted, setShowInverted] = useState(false)
  const route = trade?.route?.path?.map((val, i) => {
    return i < trade?.route?.path?.length - 1 ? `${val.getSymbol(chainId)} > ` : val.getSymbol(chainId)
  })
  const expectedOutput = trade?.outputAmount?.toSignificant(4)
  // get custom setting values for user
  const slippageAdjustedAmounts = useMemo(
    () => computeSlippageAdjustedAmounts(trade, allowedSlippage),
    [allowedSlippage, trade],
  )
  const { priceImpactWithoutFee, realizedLPFee } = useMemo(
    () => computeTradePriceBreakdown(chainId, bestRoute.smartRouter, trade),
    [trade, bestRoute, chainId],
  )

  return trade && swapDelay !== SwapDelay.INIT ? (
    <Flex sx={{ ...styles.dexTradeInfoContainer }}>
      <Flex
        sx={{ width: '100%', justifyContent: 'space-between', alignItems: 'center' }}
        onClick={() => setShowMore((prev) => !prev)}
      >
        <TradePrice price={trade?.executionPrice} showInverted={showInverted} setShowInverted={setShowInverted} />
        <Flex>
          <Flex
            sx={{
              ...styles.normalRouterContainer,
              background: isBonusRouter ? 'smartGradient' : 'lightGray',
            }}
          >
            <Text size="8px" weight={700} sx={{ ...dexStyles.textWrap, lineHeight: isBonusRouter ? '10px' : '10px' }}>
              {isBonusRouter ? t('Bonus Router') : isSmartRouter ? t('Smart Router') : t('ApeSwap Router')}
            </Text>
          </Flex>
          <Svg icon="caret" color="textPrimary" direction={showMore ? 'up' : 'down'} />
        </Flex>
      </Flex>
      <AnimatePresence>
        {showMore && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'fit-content' }}
            transition={{ opacity: { duration: 0.2 } }}
            exit={{ opacity: 0, height: 0 }}
            sx={{ position: 'relative' }}
          >
            <Divider />
            <Flex sx={{ justifyContent: 'space-between', margin: '10px 0px' }}>
              <Text size="12px" sx={dexStyles.textWrap} mr="10px">
                {t('Price impact')}
              </Text>
              <FormattedPriceImpact priceImpact={priceImpactWithoutFee} />
            </Flex>
            <Flex sx={{ justifyContent: 'space-between', margin: '10px 0px' }}>
              <Text size="12px" sx={dexStyles.textWrap} mr="10px">
                {t('Expected output')}
              </Text>
              <Text size="12px" sx={dexStyles.textWrap}>
                {expectedOutput} {trade.outputAmount.currency.getSymbol(chainId)}
              </Text>
            </Flex>
            <Flex sx={{ justifyContent: 'space-between', margin: '10px 0px' }}>
              <Text size="12px" sx={dexStyles.textWrap} mr="10px">
                {t('Minimum received')}
              </Text>
              <Text size="12px" sx={dexStyles.textWrap}>
                {slippageAdjustedAmounts[Field.OUTPUT]?.toSignificant(4)}{' '}
                {trade.outputAmount.currency.getSymbol(chainId)}
              </Text>
            </Flex>
            <Flex sx={{ justifyContent: 'space-between', margin: '10px 0px' }}>
              <Text size="12px" sx={dexStyles.textWrap} mr="10px">
                {t('Liquidity provider fee')}
              </Text>
              <Text size="12px" sx={dexStyles.textWrap}>
                {realizedLPFee
                  ? `${realizedLPFee.toSignificant(4)} ${trade.inputAmount.currency.getSymbol(chainId)}`
                  : '-'}
              </Text>
            </Flex>
            {/**
             * TODO: Break this up into a component
             */}
            <Flex
              sx={{
                ...styles.bottomRouterContainer,
                background: isBonusRouter ? 'smartGradient' : 'bgSecondary',
              }}
            >
              <Flex sx={{ justifyContent: 'space-between', margin: '4px 0px' }}>
                <Text size="12px" weight={700} sx={dexStyles.textWrap}>
                  {isBonusRouter ? t('Bonus Router') : isSmartRouter ? t('Smart Router') : t('ApeSwap Router')}
                </Text>
                <Flex sx={{ alignSelf: 'flex-end' }}>
                  <TooltipBubble
                    body={
                      <Text size="12px" weight={500} sx={{ lineHeight: '10px' }}>
                        {isBonusRouter
                          ? t(
                              'The router used to upgrade transactions and return a swap bonus if the trade meets certain conditions.',
                            )
                          : isSmartRouter
                          ? t(
                              'The router used to facilitate transactions through other DEXs if ApeSwap’s DEX cannot fulfill them.',
                            )
                          : t('The native router that powers the majority of trades on the ApeSwap DEX.')}
                      </Text>
                    }
                    placement="topRight"
                    transformTip="translate(22px, 0px)"
                    width="200px"
                  >
                    <HelpIcon width="12px" color="textPrimary" sx={{ alignSelf: 'flex-end' }} />
                  </TooltipBubble>
                </Flex>
              </Flex>
              {isBonusRouter && (
                <>
                  <Flex sx={{ justifyContent: 'space-between', margin: '2px 0px' }}>
                    <Text size="10px" sx={dexStyles.textWrap} mr="10px">
                      {t('Estimated swap bonus')}
                    </Text>
                    <Text size="10px" sx={dexStyles.textWrap}>
                      ~ {(bestRoute?.bonusRouter?.summary?.searchSummary?.expectedKickbackProfit * 0.3).toFixed(6)}{' '}
                      {CHAIN_PARAMS[chainId].nativeCurrency.symbol}{' '}
                      {`(~$${(bestRoute?.bonusRouter?.summary?.searchSummary?.expectedUsdProfit * 0.3).toFixed(2)})`}
                    </Text>
                  </Flex>
                </>
              )}
              <Flex sx={{ justifyContent: 'space-between', margin: '4px 0px' }}>
                <Text size="10px" sx={dexStyles.textWrap}>
                  {t('Route')}
                </Text>
                <Text size="10px" sx={dexStyles.textWrap}>
                  {route}
                </Text>
              </Flex>
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
    </Flex>
  ) : (
    <></>
  )
}

export default React.memo(DexTradeInfo)
