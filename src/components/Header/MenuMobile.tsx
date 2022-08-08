import { More } from 'components/Icons'
import { useTranslation } from 'contexts/Localization'
import React from 'react'
import { NavBottomStyled, ActionBottomStyled, NavLinkBottomStyled } from './style'

const menuMobile = [
  {
    path: '/',
    icon: 'icon-exchange',
    name: 'Exchange',
  },
  {
    path: 'earn',
    icon: 'icon-pig',
    name: 'Earn',
  },
  {
    path: 'launchpad',
    icon: 'icon-rocket',
    name: 'Launchpad',
  },
  {
    path: '#',
    icon: 'icon-more',
    name: 'More',
  },
]
export const MenuMobile = ({ toggleDrawer, setToggleDrawer }) => {
  const { t } = useTranslation()

  return (
    <NavBottomStyled>
      {menuMobile.map((item) => {
        if (item.name !== 'More') {
          return (
            <NavLinkBottomStyled to={item.path} key={item.icon}>
              <span className={item.icon}>
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
                <span className="path4" />
              </span>

              {item.name}
            </NavLinkBottomStyled>
          )
        }
        return (
          <ActionBottomStyled
            type="button"
            className={toggleDrawer && 'active'}
            onClick={() => setToggleDrawer(!toggleDrawer)}
            key={item.icon}
          >
            <More width="24px" bgColor={toggleDrawer} />
            {item.name}
          </ActionBottomStyled>
        )
      })}
    </NavBottomStyled>
  )
}
