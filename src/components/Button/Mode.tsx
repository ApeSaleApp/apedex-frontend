import { Icon } from 'components/Icons'
import React from 'react'
import { ButtonWrapperStyled } from './style'

export const Mode = ({ toggleTheme, isDark }) => {
  return (
    <ButtonWrapperStyled className="icons-only" style={{ width: '32px', height: '32px' }} onClick={toggleTheme}>
      {isDark ? <Icon iconName="icon-sun" size="24px" /> : <Icon iconName="icon-moon-fill" size="24px" />}
    </ButtonWrapperStyled>
  )
}
