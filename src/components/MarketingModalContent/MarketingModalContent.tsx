import { ModalContentProps } from '@ape.swap/uikit'
import React from 'react'
import { ModalBody } from './styles'

const ModalContent: React.FC<ModalContentProps> = ({ Icon, children }) => {
  return (
    <ModalBody>
      {Icon}
      {children}
    </ModalBody>
  )
}

export default ModalContent
