import React from 'react'
import { Icon } from 'components/Icons'
import { useModal } from 'components/Modal'
import Button from 'components/Button/Button'
import SettingsModal from './SettingsModal'
import useIsMobile from '../../../hooks/useIsMobile'

const GlobalSettings = () => {
  const [onPresentSettingsModal] = useModal(<SettingsModal />)
  const isMobile = useIsMobile()

  return (
    <Button
      onClick={onPresentSettingsModal}
      size={isMobile ? 'sm' : 'md'}
      style={{ fontSize: '25px', padding: 8, height: isMobile ? '36px' : '40px' }}
    >
      <Icon iconName="icon-setting" size="16px" />
    </Button>
  )
}

export default GlobalSettings
