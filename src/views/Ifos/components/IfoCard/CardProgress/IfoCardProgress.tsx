import React from 'react'
import { Progress } from '@ape.swap/uikit'
import { StyledProgress, ProgressBar, Label } from './styles'

interface IfoCardProgressProps {
  progress: number
  amountLabel?: string
  timeLabel?: string
}

const IfoCardProgress: React.FC<IfoCardProgressProps> = ({ progress, amountLabel, timeLabel }) => {
  return (
    <StyledProgress>
      {!!amountLabel && <Label fontSize="16px">{amountLabel}</Label>}
      <ProgressBar>
        <Progress to={progress} />
      </ProgressBar>
      {!!timeLabel && <Label fontSize="12px">{timeLabel}</Label>}
    </StyledProgress>
  )
}

export default IfoCardProgress
