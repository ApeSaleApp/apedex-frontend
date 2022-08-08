/** @jsxImportSource theme-ui */
import React from 'react'
import useIsMobile from 'hooks/useIsMobile'
import { ButtonModalStyled, ButtonWrapperStyled } from '../style'
import { SwitchNetwork, useNetworkModal } from './NetworkModal'
import { NETWORK_ICON, NETWORK_LABEL } from './NetworkModal/config'
import { Icon as IconArrowDown } from '../../Icons'

interface Props {
  chainId: number
  switchNetwork: SwitchNetwork
  t: (key: string) => string
}

const NetworkButton: React.FC<Props> = ({ chainId, switchNetwork, t }) => {
  const isMobile = useIsMobile()
  const { onPresentNetworkModal } = useNetworkModal(switchNetwork, chainId, t)
  const Icon = NETWORK_ICON[chainId]

  return (
    <ButtonWrapperStyled className={isMobile ? 'icons-only' : ''}>
      <ButtonModalStyled
        onClick={() => {
          onPresentNetworkModal()
        }}
      >
        <Icon width="27px" />
        {!isMobile && NETWORK_LABEL[chainId]}
        {!isMobile && <IconArrowDown iconName="icon-keyboard_arrow_down" size="20px" />}
      </ButtonModalStyled>
    </ButtonWrapperStyled>
  )
}

export default NetworkButton
