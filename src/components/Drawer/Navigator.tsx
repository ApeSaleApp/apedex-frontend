import { ConnectButton } from 'components/Button'
import { useTranslation } from 'contexts/Localization'
import React from 'react'
import { menu } from './menu'
import { NavigatorWrapper, StyledNavLink } from './style'

export const Navigator = () => {
  const { t } = useTranslation()
  return (
    <NavigatorWrapper>
      {menu.map((item) => (
        <StyledNavLink to={item.path} key={item.id}>
          <span className={item.icon} />
          {t(item.name)}
        </StyledNavLink>
      ))}
      <ConnectButton />
    </NavigatorWrapper>
  )
}
