/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from 'react'
import { JSBI, Pair, Percent } from '@apeswapfinance/sdk'
import { Link } from 'react-router-dom'
import { Box, Divider } from 'theme-ui'
import { AnimatePresence, motion } from 'framer-motion'
import styled from 'styled-components'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { getTokenUsdPrice } from 'utils/getTokenUsdPrice'
import { useTranslation } from 'contexts/Localization'
import { Text } from 'components/Text'
import { Flex } from 'components/Flex'
import { Svg } from 'components/Svg'
import Button from 'components/Button/Button'
import { Card, CardProps } from 'components/Card'
import useTotalSupply from '../../hooks/useTotalSupply'

import { useTokenBalance } from '../../state/wallet/hooks'
import { currencyId } from '../../utils/currencyId'
import { unwrappedToken } from '../../utils/wrappedCurrency'

import { AutoColumn } from '../layout/Column'
import { RowBetween, RowFixed } from '../layout/Row'
import { BIG_INT_ZERO } from '../../config/constants'
import Dots from '../Loader/Dots'
import { styles } from './styles'

const FixedHeightRow = styled(RowBetween)`
  height: 24px;
`

const StyledText = styled(Text)`
  font-size: 14px;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 20px;
  }
`

interface PositionCardProps extends CardProps {
  pair: Pair
  showUnwrapped?: boolean
}

export function MinimalPositionCard({ pair, showUnwrapped = false }: PositionCardProps) {
  const { account, chainId } = useActiveWeb3React()

  const currency0 = showUnwrapped ? pair.token0 : unwrappedToken(pair.token0)
  const currency1 = showUnwrapped ? pair.token1 : unwrappedToken(pair.token1)

  const [showMore, setShowMore] = useState(false)

  const userPoolBalance = useTokenBalance(account ?? undefined, pair.liquidityToken)
  const totalPoolTokens = useTotalSupply(pair.liquidityToken)

  const { t } = useTranslation()

  const poolTokenPercentage =
    !!userPoolBalance && !!totalPoolTokens && JSBI.greaterThanOrEqual(totalPoolTokens.raw, userPoolBalance.raw)
      ? new Percent(userPoolBalance.raw, totalPoolTokens.raw)
      : undefined

  const [token0Deposited, token1Deposited] =
    !!pair &&
    !!totalPoolTokens &&
    !!userPoolBalance &&
    // this condition is a short-circuit in the case where useTokenBalance updates sooner than useTotalSupply
    JSBI.greaterThanOrEqual(totalPoolTokens.raw, userPoolBalance.raw)
      ? [
          pair.getLiquidityValue(pair.token0, totalPoolTokens, userPoolBalance, false),
          pair.getLiquidityValue(pair.token1, totalPoolTokens, userPoolBalance, false),
        ]
      : [undefined, undefined]

  return (
    <>
      {userPoolBalance && JSBI.greaterThan(userPoolBalance.raw, JSBI.BigInt(0)) ? (
        <Card>
          <Box>
            <AutoColumn gap="16px">
              <FixedHeightRow>
                <RowFixed>
                  <StyledText color="secondary" bold>
                    {t('LP tokens in your wallet')}
                  </StyledText>
                </RowFixed>
              </FixedHeightRow>
              <FixedHeightRow onClick={() => setShowMore(!showMore)}>
                <RowFixed>
                  <StyledText small color="textSecondary">
                    {currency0.getSymbol(chainId)}-{currency1.getSymbol(chainId)} LP
                  </StyledText>
                </RowFixed>
                <RowFixed>
                  <Text>{userPoolBalance ? userPoolBalance.toSignificant(4) : '-'}</Text>
                </RowFixed>
              </FixedHeightRow>
              <AutoColumn gap="4px">
                <FixedHeightRow>
                  <Text color="textSecondary" small>
                    {t('Share of Pool')}:
                  </Text>
                  <Text>{poolTokenPercentage ? `${poolTokenPercentage.toFixed(6)}%` : '-'}</Text>
                </FixedHeightRow>
                <FixedHeightRow>
                  <Text color="textSecondary" small>
                    {`${t('Pooled')} ${currency0.getSymbol(chainId)}`}:
                  </Text>
                  {token0Deposited ? (
                    <RowFixed>
                      <Text ml="6px">{token0Deposited?.toSignificant(6)}</Text>
                    </RowFixed>
                  ) : (
                    '-'
                  )}
                </FixedHeightRow>
                <FixedHeightRow>
                  <Text color="textSecondary" small>
                    {`${t('Pooled')} ${currency1.getSymbol(chainId)}`}:
                  </Text>
                  {token1Deposited ? (
                    <RowFixed>
                      <Text ml="6px">{token1Deposited?.toSignificant(6)}</Text>
                    </RowFixed>
                  ) : (
                    '-'
                  )}
                </FixedHeightRow>
              </AutoColumn>
            </AutoColumn>
          </Box>
        </Card>
      ) : (
        <Card>
          <Text fontSize="14px" style={{ textAlign: 'center' }}>
            {t(
              "By adding liquidity you'll earn 0.2% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.",
            )}
          </Text>
        </Card>
      )}
    </>
  )
}

export default function FullPositionCard({ pair }: PositionCardProps) {
  const { account, chainId } = useActiveWeb3React()

  const [currencyPrice, setCurrencyPrice] = useState<number>(null)

  const currency0 = unwrappedToken(pair.token0)
  const currency1 = unwrappedToken(pair.token1)

  const [showMore, setShowMore] = useState(false)
  const { t } = useTranslation()

  const userPoolBalance = useTokenBalance(account ?? undefined, pair.liquidityToken)
  const totalPoolTokens = useTotalSupply(pair.liquidityToken)

  useEffect(() => {
    const fetchCurrencyTokenPrice = async () => {
      const tokenPriceReturned = await getTokenUsdPrice(chainId, pair?.liquidityToken?.address, 18, true, false)
      setCurrencyPrice(tokenPriceReturned)
    }
    fetchCurrencyTokenPrice()
  }, [pair, chainId])

  const poolTokenPercentage =
    !!userPoolBalance && !!totalPoolTokens && JSBI.greaterThanOrEqual(totalPoolTokens.raw, userPoolBalance.raw)
      ? new Percent(userPoolBalance.raw, totalPoolTokens.raw)
      : undefined

  const [token0Deposited, token1Deposited] =
    !!pair &&
    !!totalPoolTokens &&
    !!userPoolBalance &&
    // this condition is a short-circuit in the case where useTokenBalance updates sooner than useTotalSupply
    JSBI.greaterThanOrEqual(totalPoolTokens.raw, userPoolBalance.raw)
      ? [
          pair.getLiquidityValue(pair.token0, totalPoolTokens, userPoolBalance, false),
          pair.getLiquidityValue(pair.token1, totalPoolTokens, userPoolBalance, false),
        ]
      : [undefined, undefined]

  return (
    <Flex sx={{ ...styles.poolContainer }} onClick={() => setShowMore((prev) => !prev)}>
      <Flex sx={{ ...styles.innerContainer }}>
        <Flex sx={{ ...styles.titleContainer }}>
          <Text size="14px" weight={700} ml="5px">
            {!currency0 || !currency1 ? (
              <Dots>Loading</Dots>
            ) : (
              `${currency0.getSymbol(chainId)} - ${currency1.getSymbol(chainId)}`
            )}
          </Text>
        </Flex>
        <Flex sx={{ alignItems: 'center' }}>
          <Text mr="10px" weight={700}>
            {currencyPrice ? `$${(currencyPrice * parseFloat(userPoolBalance?.toSignificant(4))).toFixed(2)}` : '-'}
          </Text>
          <Svg icon="caret" width="8px" direction={showMore ? 'up' : 'down'} />
        </Flex>
      </Flex>
      <AnimatePresence>
        {showMore && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'fit-content' }}
            transition={{ opacity: { duration: 0.2 } }}
            exit={{ opacity: 0, height: 0 }}
            sx={{ overflow: 'hidden', position: 'relative', width: '100%' }}
          >
            <Divider />
            <Flex sx={{ width: '100%', flexDirection: 'column' }}>
              <Flex sx={{ justifyContent: 'space-between', margin: '2.5px 0px' }}>
                <Text size="14px" weight={500}>
                  {t('Total pooled tokens')}
                </Text>
                {userPoolBalance ? (
                  <Text size="14px" weight={700}>
                    {userPoolBalance?.toSignificant(4)}
                  </Text>
                ) : (
                  '-'
                )}
              </Flex>
              <Flex sx={{ justifyContent: 'space-between', margin: '2.5px 0px' }}>
                <Text size="14px" weight={500}>
                  {t('Pooled')} {currency0.getSymbol(chainId)}
                </Text>
                {token0Deposited ? (
                  <Flex sx={{ alignItems: 'center' }}>
                    <Text size="14px" weight={700} mr="8px">
                      {token0Deposited?.toSignificant(6)}
                    </Text>
                  </Flex>
                ) : (
                  '-'
                )}
              </Flex>
              <Flex sx={{ justifyContent: 'space-between', margin: '2.5px 0px' }}>
                <Text size="14px" weight={500}>
                  {t('Pooled')} {currency1.getSymbol(chainId)}
                </Text>
                {token1Deposited ? (
                  <Flex sx={{ alignItems: 'center' }}>
                    <Text size="14px" weight={700} mr="8px">
                      {token1Deposited?.toSignificant(6)}
                    </Text>
                  </Flex>
                ) : (
                  '-'
                )}
              </Flex>
              <Flex sx={{ justifyContent: 'space-between', margin: '2.5px 0px' }}>
                <Text size="14px" weight={500}>
                  {t('Share of pool')}
                </Text>
                <Text size="14px" weight={700}>
                  {poolTokenPercentage
                    ? `${poolTokenPercentage.toFixed(2) === '0.00' ? '<0.01' : poolTokenPercentage.toFixed(2)}%`
                    : '-'}
                </Text>
              </Flex>
              {userPoolBalance && JSBI.greaterThan(userPoolBalance.raw, BIG_INT_ZERO) && (
                <Flex mt="10px">
                  <Button
                    as={Link}
                    to={`/add/${currencyId(currency0)}/${currencyId(currency1)}`}
                    fullWidth
                    mb="8px"
                    mr="10px"
                  >
                    {t('Add')}
                  </Button>
                  <Button
                    as={Link}
                    to={`/liquidity/remove/${currencyId(currency0)}/${currencyId(currency1)}`}
                    mb="8px"
                    fullWidth
                  >
                    {t('Remove')}
                  </Button>
                </Flex>
              )}
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
    </Flex>
  )
}
