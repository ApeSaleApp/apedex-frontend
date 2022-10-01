import { Modal, ModalProps } from 'components/Modal'
import { Text } from 'components/Text'
import React from 'react'
import MoonPayIframe from './MoonFrame'

export default function MoonPayModal({ onDismiss }: ModalProps) {
  return (
    <Modal title="Fiat On Ramp" minWidth="400px" onDismiss={onDismiss}>
      <Text mb="12px">Top up with Moonpay</Text>
      <MoonPayIframe />
    </Modal>
  )
}
