import React from 'react'
import Page from 'components/layout/Page'
import useTopup from 'hooks/useTopup'
import { Flex } from 'components/Flex'
import Button from 'components/Button/Button'
import { useModal } from 'components/Modal'
import MoonPayIframe from './MoonFrame'
import MoonPayModal from './MoonpayModal'

export default function Topup() {
  const { onTopup } = useTopup()
  const [onPresentModal] = useModal(<MoonPayModal />)

  return (
    <Page>
      <Flex sx={{ justifyContent: 'center' }} mb="20px" mt="20px">
        <Button onClick={() => onTopup()} margin="10px">
          Top Up
        </Button>
        <Button onClick={() => onPresentModal()} margin="10px">
          Modal
        </Button>
      </Flex>
      <MoonPayIframe />
    </Page>
  )
}
