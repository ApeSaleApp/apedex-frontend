import React, { useState } from 'react'
import { AutoRenewIcon } from '@ape.swap/uikit'
import useApproveIazo from 'views/Iazos/hooks/useApproveIazo'
import { useTranslation } from 'contexts/Localization'
import StyledButton from './styles'

interface ApproveCreateIazoProps {
  tokenAddress: string
  iazoAddress: string
  onApproveChange: (pendingTrx: boolean) => void
}

const ApproveIazo: React.FC<ApproveCreateIazoProps> = ({ tokenAddress, iazoAddress, onApproveChange }) => {
  const [pendingTrx, setPendingTrx] = useState(false)
  const onApproveIazo = useApproveIazo(tokenAddress, iazoAddress).onApprove
  const { t } = useTranslation()

  return (
    <StyledButton
      onClick={async () => {
        setPendingTrx(true)
        await onApproveIazo()
        onApproveChange(true)
        setPendingTrx(false)
      }}
      disabled={pendingTrx}
      endIcon={pendingTrx && <AutoRenewIcon spin color="currentColor" />}
    >
      {t('APPROVE')}
    </StyledButton>
  )
}

export default ApproveIazo
