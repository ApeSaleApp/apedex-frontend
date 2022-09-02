/** @jsxImportSource theme-ui */
import React from 'react'
// import { useWalletModal } from '@ape.swap/uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { Text } from 'components/Text'
import { ButtonStyled } from '../style'
import { useWalletModal } from './WalletModal'
import Button from '../Button'
import { dynamicStyles } from './styles'

const ConnectButton = () => {
  const { account, chainId } = useActiveWeb3React()
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, t, account)
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null
  const buttonStyle = dynamicStyles.userBlockBtn({ account })

  if (account) {
    return (
      <Button
        size="sm"
        fontSize="14px"
        sx={buttonStyle}
        onClick={() => {
          onPresentAccountModal()
        }}
        account={account}
      >
        <Text weight="normal">{accountEllipsis}</Text>
      </Button>
    )
  }
  return (
    <ButtonStyled type="button" onClick={onPresentConnectModal}>
      + {t('CONNECT')}
    </ButtonStyled>
  )
}

export default ConnectButton
