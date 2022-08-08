/** @jsxImportSource theme-ui */
import { Text } from '@ape.swap/uikit'
import Button from 'components/Button/Button'
import { ModalContext } from 'components/Modal'
import React, { useContext } from 'react'
import { localStorageKey } from './config'
import { Login, Config } from './types'

interface Props {
  walletConfig: Config
  login: Login
  mb: string
  t: (key: string) => string
}

const WalletCard: React.FC<Props> = ({ login, walletConfig, mb, t }) => {
  const { handleClose } = useContext(ModalContext)
  const { title, icon: Icon } = walletConfig
  return (
    <Button
      fullWidth
      variant="tertiary"
      onClick={() => {
        login(walletConfig.connectorId)
        window.localStorage.setItem(localStorageKey, walletConfig.connectorId)
        handleClose()
      }}
      sx={{
        justifyContent: 'space-between',
        border: '0px',
        background: 'bgSecondary',
        fontSize: '16px',
        minHeight: '44px',
        boxShadow: 'none',
        lineHeight: 1,
        letterSpacing: '0.03em',
        padding: '0px 24px',
        opacity: 1,
        '&:hover': {},
      }}
      mb={mb}
      id={`wallet-connect-${t(title)?.toLocaleLowerCase()}`}
    >
      <Text sx={{ lineHeight: 1.5 }} size="16px" weight={600} color="text" mr="16px">
        {t(title)}
      </Text>
      <Icon width="32px" color="textPrimary" />
    </Button>
  )
}

export default WalletCard
