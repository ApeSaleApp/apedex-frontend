import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const DrawerWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  padding: 12px;
  min-height: 100vh;
  max-width: 236px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  transform: translateX(-236px);
  transition: all 300ms linear;
  &.show-sidebar {
    transform: translateX(0);
  }
  ${({ theme }) => theme.mediaQueries.md} {
    position: static;
    transform: translateX(0);
  }
`

export const NavigatorWrapper = styled.nav`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const StyledNavLink = styled(NavLink)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  align-items: flex-start;
  padding: 8px;
  gap: 10px;
  border-radius: 12px;

  &:hover,
  &.active {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textActiveSecondary};

    [class*='icon-'] {
      color: ${({ theme }) => theme.colors.textActiveSecondary};
    }
  }
`

export const SupportFooterWrapper = styled.div``
export const MoreActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid ${({ theme }) => (theme.isDark ? 'rgba(255, 255, 255, 0.12);' : 'rgba(0, 0, 0, 0.12);')}
  border-top: 1px solid ${({ theme }) => (theme.isDark ? 'rgba(255, 255, 255, 0.12);' : 'rgba(0, 0, 0, 0.12);')}
`
export const ActionItem = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${({ theme }) => theme.colors.textSecondary};
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`

export const ContactList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};

  a {
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`

export const Version = styled.div`
  margin-top: 80px;
  color: ${({ theme }) => theme.colors.textSecondary};
`
