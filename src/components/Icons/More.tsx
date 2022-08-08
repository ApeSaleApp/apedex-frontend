import React from 'react'
import { LegacySvgProps, LegacySvg } from 'components/Svg'
import { useTheme } from 'styled-components'

const Icon: React.FC<LegacySvgProps> = ({ bgColor, ...props }) => {
  const theme = useTheme()
  return (
    <LegacySvg viewBox="0 0 24 24" {...props}>
      <circle cx="10" cy="10" r="10" fill={bgColor ? theme.colors.secondary : theme.colors.textSecondary} />
      <path
        d="M15.7576 8.48487C16.5944 8.48487 17.2727 9.16322 17.2727 10C17.2727 10.8368 16.5944 11.5152 15.7576 11.5152C14.9208 11.5152 14.2424 10.8368 14.2424 10C14.2424 9.16322 14.9208 8.48487 15.7576 8.48487Z"
        fill={theme.colors.bgSecondary}
      />
      <path
        d="M10 8.48487C10.8368 8.48487 11.5151 9.16322 11.5151 10C11.5151 10.8368 10.8368 11.5152 10 11.5152C9.16322 11.5152 8.48486 10.8368 8.48486 10C8.48486 9.16322 9.16322 8.48487 10 8.48487Z"
        fill={theme.colors.bgSecondary}
      />
      <path
        d="M4.24244 8.48487C5.07923 8.48487 5.75758 9.16322 5.75758 10C5.75758 10.8368 5.07923 11.5152 4.24244 11.5152C3.40565 11.5152 2.72729 10.8368 2.72729 10C2.72729 9.16322 3.40565 8.48487 4.24244 8.48487Z"
        fill={theme.colors.bgSecondary}
      />
    </LegacySvg>
  )
}

export default Icon
