/** @jsxImportSource theme-ui */
import React from 'react'
// import { useWalletModal } from '@ape.swap/uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'
import { ButtonStyled } from '../style'
import { useWalletModal } from './WalletModal'

const ConnectButton = () => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)

  return (
    <ButtonStyled type="button" onClick={onPresentConnectModal}>
      + {t('CONNECT')}
    </ButtonStyled>
  )
}

export default ConnectButton
