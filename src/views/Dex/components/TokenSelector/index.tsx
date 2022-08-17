/** @jsxImportSource theme-ui */
import { Currency } from '@apeswapfinance/sdk'
import { Flex } from 'components/Flex'
import { useModal } from 'components/Modal'
import CurrencySearchModal from 'components/SearchModal/CurrencySearchModal'
import { Svg } from 'components/Svg'
import { Text } from 'components/Text'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import React, { useCallback } from 'react'
import { styles } from './styles'

const TokenSelector: React.FC<{
  currency: Currency
  otherCurrency: Currency
  onCurrencySelect: (field: any, currency: Currency, typedValue?: string) => void
  field: any
  typedValue?: string
  showCommonBases?: boolean
  isRemoveLiquidity?: boolean
}> = ({ currency, onCurrencySelect, otherCurrency, isRemoveLiquidity, typedValue, field, showCommonBases = false }) => {
  const { chainId } = useActiveWeb3React()

  const handleDynamicCurrencySelect = useCallback(
    (selectedCurrency: Currency) => {
      onCurrencySelect(field, selectedCurrency, typedValue)
    },
    [field, typedValue, onCurrencySelect],
  )

  const [onPresentCurrencyModal] = useModal(
    <CurrencySearchModal
      onCurrencySelect={handleDynamicCurrencySelect}
      selectedCurrency={currency}
      otherSelectedCurrency={otherCurrency}
      showCommonBases={showCommonBases}
    />,
  )

  return isRemoveLiquidity ? (
    <Flex
      sx={{
        ...styles.primaryFlex,
        cursor: 'default',
        '&:active': { transform: 'none' },
        ':hover': { background: 'white4' },
      }}
    >
      <Text sx={styles.tokenText}>
        {currency?.getSymbol(chainId)} - {otherCurrency?.getSymbol(chainId)}
      </Text>
    </Flex>
  ) : (
    <Flex sx={{ ...styles.primaryFlex }} onClick={onPresentCurrencyModal}>
      <Text sx={{ ...styles.tokenText }}>{currency?.getSymbol(chainId)}</Text>
      <Svg icon="caret" />
    </Flex>
  )
}

export default React.memo(TokenSelector)
