import useTheme from 'hooks/useTheme'
import React from 'react'
import { DrawerWrapper } from './style'
import { Navigator } from './Navigator'
import { SupportFooter } from './SupportFooter'

export interface IPropLogo {
  path: string
}
const Logo: React.FC<IPropLogo> = ({ path }) => {
  return <img src={path} alt="ape logo" style={{ height: '29px', objectFit: 'contain' }} />
}

export const Drawer: React.FC<any> = () => {
  const { isDark } = useTheme()

  return (
    <DrawerWrapper>
      <div>
        <Logo path={isDark ? '/image-ape/logo-dark.png' : '/image-ape/logo-light.png'} />
        <Navigator />
      </div>
      <SupportFooter />
    </DrawerWrapper>
  )
}
