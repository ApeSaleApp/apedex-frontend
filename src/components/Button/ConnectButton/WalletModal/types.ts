import { LegacySvgProps } from 'components/Svg'
import { FC } from 'react'

export enum ConnectorNames {
  Injected = 'injected',
  WalletConnect = 'walletconnect',
  BSC = 'bsc',
  Walletlink = 'Walletlink',
  Unstoppable = 'Unstoppable',
  Torus = 'Torus',
}

export type Login = (connectorId: ConnectorNames) => void

export interface Config {
  title: string
  icon: FC<LegacySvgProps>
  connectorId: ConnectorNames
}
