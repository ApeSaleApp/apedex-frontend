import React from 'react'
import { Text as ThemeUIText } from 'theme-ui'
import { TextProps, variants, weights } from './types'

const Text: React.FC<TextProps> = ({
  variant = variants.NORMAL,
  weight = weights.NORMAL,
  size,
  children,
  color,
  ...props
}) => {
  return (
    <ThemeUIText {...props} sx={{ variant: `text.${variant}`, color, fontWeight: weight, fontSize: size }}>
      {children}
    </ThemeUIText>
  )
}

export default Text
