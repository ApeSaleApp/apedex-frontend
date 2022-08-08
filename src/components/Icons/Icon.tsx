// keep
import React from 'react'
import styled from 'styled-components'

const IconStyled = styled.span<any>`
  font-size: ${({ theme, size }) => size};
  color: ${({ theme, color }) => theme.colors[color]};
`
export const Icon = ({ iconName, size, color = 'textSecondary' }) => {
  return <IconStyled className={iconName} size={size} color={color} />
}
