import React from 'react'
import { colorValues } from 'style/Global'
import { Button } from 'theme-ui'
import { Svg } from '../Svg'
import { icons } from '../Svg/types'
import { styles } from './style'
import { IconButtonProps, iconButtonVariants as variants } from './types'

const IconButton: React.FC<IconButtonProps> = ({
  icon = icons.DISCORD,
  color = colorValues.textActiveSecondary,
  background = colorValues.secondary,
  variant = variants.PRIMARY,
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      variant={variant}
      sx={{
        variant: `buttons.${variant}`,
        background,
        ...(variant === variants.PRIMARY ? styles.primary : {}),
        ...(variant === variants.TRANSPARENT ? styles.transparent : {}),
      }}
    >
      {children || <Svg color={color} icon={icon} {...props} />}
    </Button>
  )
}

export default IconButton
