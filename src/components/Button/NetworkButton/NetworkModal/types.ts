import { LegacySvgProps } from 'components/Svg'
import { FC } from 'react'

export type SwitchNetwork = (chainId: number) => void

export interface Config {
  chainId: number
  networkName: string
  symbol: string
  icon: FC<LegacySvgProps>
}

export type Handler = () => void

export interface InjectedProps {
  onDismiss?: Handler
}
