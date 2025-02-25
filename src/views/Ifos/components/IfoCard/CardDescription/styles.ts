import styled from 'styled-components'
import { Text, Image, LinkExternal } from '@ape.swap/uikit'
import { UpArrow, DownArrow } from 'components/Icons'

export const StyledIfoCardDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => (theme.isDark ? theme.colors.primaryBright : theme.colors.primary)};
  cursor: pointer;
  display: block;
  font-weight: 600;
  outline: 0;
  width: 100%;
`

export const Description = styled(Text).attrs({ fontFamily: 'poppins' })<{ isOpen: boolean }>`
  color: ${({ theme }) => (theme.isDark ? theme.colors.primaryBright : theme.colors.primary)};
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  margin-top: 24px;
  font-weight: 300;
`

export const IconImage = styled(Image)`
  margin-left: 8px;
  display: inline-block;
`

export const Link = styled(LinkExternal)`
  color: ${({ theme }) => (theme.isDark ? theme.colors.primaryBright : theme.colors.primary)};
`

export const UpArrowIcon = styled(UpArrow)`
  width: 14px;
  height: 9px;
  color: ${({ theme }) => (theme.isDark ? theme.colors.primaryBright : theme.colors.primary)};
  margin-left: 8px;
`

export const DownArrowIcon = styled(DownArrow)`
  width: 14px;
  height: 9px;
  color: ${({ theme }) => (theme.isDark ? theme.colors.primaryBright : theme.colors.primary)};
  margin-left: 8px;
`
