import useTheme from 'hooks/useTheme'
import React from 'react'
import { HamburgerCloseIcon } from 'components/Icons'
import useIsMobile from 'hooks/useIsMobile'
import { DrawerWrapper } from './style'
import { Navigator } from './Navigator'
import { SupportFooter } from './SupportFooter'

export interface IPropLogo {
  path: string
}
const Logo: React.FC<IPropLogo> = ({ path }) => {
  return <img src={path} alt="ape logo" style={{ height: '29px', objectFit: 'contain' }} />
}

export const Drawer: React.FC<any> = ({ toggleDrawer, setToggleDrawer }) => {
  const { isDark } = useTheme()
  const isMobile = useIsMobile()

  return (
    <DrawerWrapper className={toggleDrawer ? 'show-sidebar' : ''}>
      {isMobile && (
        <HamburgerCloseIcon
          onClick={() => setToggleDrawer(false)}
          width="24px"
          color="textSecondary"
          style={{ marginLeft: 'auto' }}
        />
      )}
      <div>
        <Logo path={isDark ? '/image-ape/logo-dark.png' : '/image-ape/logo-light.png'} />
        <Navigator />
      </div>
      <SupportFooter />
    </DrawerWrapper>
  )
}
