/** @jsxImportSource theme-ui */
import { Text } from '@ape.swap/uikit'
import Button from 'components/Button/Button'
import { ModalContext } from 'components/Modal'
import React, { useContext } from 'react'
import { SwitchNetwork, Config } from './types'

interface Props {
  networkConfig: Config
  chainId: number
  switchNetwork: SwitchNetwork
}

const networkBtn = {
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '16px',
  height: '48px',
  letterSpacing: '0.03em',
  padding: '0px 24px',
  marginBottom: '10px',
  opacity: 1,
}

const NetworkCard: React.FC<Props> = ({ networkConfig, chainId, switchNetwork }) => {
  const { handleClose } = useContext(ModalContext)
  const { symbol, icon: Icon } = networkConfig
  return (
    <Button
      sx={networkBtn}
      size="sm"
      fullWidth
      disabled={chainId === networkConfig.chainId}
      variant={chainId === networkConfig.chainId ? 'primary' : 'text'}
      onClick={() => {
        switchNetwork(networkConfig.chainId)
        handleClose()
      }}
    >
      <Icon width="22px" alignmentBaseline="baseline" />
      <span style={{ margin: '0px 4px' }} />
      <Text weight="normal" color="text" mr="16px" textAlign="start">
        {symbol}
      </Text>
    </Button>
  )
}

export default NetworkCard
