import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border-bottom: 1px solid ${({ theme }) => (theme.isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)')};
  ${({ theme }) => theme.mediaQueries.md} {
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    padding: 0 20px;
  }
`

export const Menu = styled.div`
  display: flex;
  gap: 30px;
  align-items: flex-start;
  padding: 0 10px;
  border-bottom: 1px solid ${({ theme }) => (theme.isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)')};
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0;
    border-bottom: 0;
  }
`
export const ActionBottomStyled = styled.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  gap: 10px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 16px;
  & > span {
    font-size: 24px;
  }

  &.active {
    color: ${({ theme }) => theme.colors.secondary};
    position: relative;
  }
`
export const NavLinkBottomStyled = styled(NavLink)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  gap: 10px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 16px;
  & > span {
    font-size: 24px;
  }

  &.active {
    color: ${({ theme }) => theme.colors.secondary};
    position: relative;
  }
`
export const StyledNavLink = styled(NavLink)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 16px 0;

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.secondary};
    position: relative;

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 28px;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`

export const NavBottomStyled = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  background: ${({ theme }) => (theme.isDark ? theme.colors.bgPrimary : theme.colors.white)};
  border-top: 1px solid ${({ theme }) => (theme.isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)')};
`
