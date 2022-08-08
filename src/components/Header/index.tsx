import React from 'react'
import { ConnectButton } from 'components/Button'
import LangSelectorButton from 'components/Button/SelectLangButton/LangSelectorButton'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import { Flex } from 'components/Flex'
import NetworkButton from 'components/Button/NetworkButton/NetworkButton'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import useSelectNetwork from 'hooks/useSelectNetwork'
import useTheme from 'hooks/useTheme'
import { Mode } from 'components/Button/Mode'
import useIsMobile from 'hooks/useIsMobile'
import { HamburgerIcon } from 'components/Icons'
import { HeaderWrapper, Menu, StyledNavLink } from './style'
import { MenuMobile } from './MenuMobile'

export const Header = ({ toggleDrawer, setToggleDrawer }) => {
  const isMobile = useIsMobile()
  const { t, setLanguage, currentLanguage } = useTranslation()
  const { chainId } = useActiveWeb3React()
  const { switchNetwork } = useSelectNetwork()
  const { isDark, toggleTheme } = useTheme()

  return (
    <>
      <HeaderWrapper>
        {isMobile && (
          <img
            src={isDark ? '/image-ape/logo-m-dark.png' : '/image-ape/logo-m-light.png'}
            alt="ape logo"
            style={{ height: '29px', objectFit: 'contain' }}
          />
        )}
        {!isMobile && (
          <Menu>
            <StyledNavLink to="/">{t('Trade')}</StyledNavLink>
            <StyledNavLink to="/liquidity">{t('Liquidity')}</StyledNavLink>
          </Menu>
        )}
        <Flex alignItems="center" sx={{ gap: '12px' }}>
          {!isMobile && (
            <LangSelectorButton t={t} langs={languageList} currentLang={currentLanguage} setLang={setLanguage} />
          )}
          <NetworkButton chainId={chainId} switchNetwork={switchNetwork} t={t} />
          <ConnectButton />
          <Mode toggleTheme={toggleTheme} isDark={isDark} />
        </Flex>
      </HeaderWrapper>
      {isMobile && (
        <Menu>
          <StyledNavLink to="/">{t('Trade')}</StyledNavLink>
          <StyledNavLink to="/liquidity">{t('Liquidity')}</StyledNavLink>
        </Menu>
      )}
      {isMobile && <MenuMobile toggleDrawer={toggleDrawer} setToggleDrawer={setToggleDrawer} />}
    </>
  )
}
