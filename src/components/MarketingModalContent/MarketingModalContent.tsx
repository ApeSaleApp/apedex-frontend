import React from 'react'
import { ModalContentProps } from '@ape.swap/uikit'
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
