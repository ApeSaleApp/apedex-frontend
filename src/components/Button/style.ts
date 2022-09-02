import styled from 'styled-components'
import { Flex, ThemeUIStyleObject } from 'theme-ui'

export const ButtonWrapperStyled = styled.div`
  background: ${({ theme }) => (theme.isDark ? '#3b3e46' : '#ffffff')};
  border-radius: 12px;
  padding: 4px 12px;
  cursor: pointer;
  &.icons-only {
    padding: 4px;
    border-radius: 50%;
  }
`

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  padding: 6px 24px;
  gap: 8px;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.textActiveSecondary};
  background-color: ${({ theme }) => theme.colors.secondary};
`
export const ButtonModalStyled = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  gap: 8px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 500;
  font-size: 16px;
`
export const FlexStyled = styled(Flex)`
  background: ${({ theme }) => (theme.isDark ? theme.colors.yellow : theme.colors.success)};
  height: 30px;
  width: 30px;
  border-radius: 30px;
  justify-content: center;
  padding-right: 1px;
  cursor: pointer;
  transition: all 0.3s linear;
  &:active {
    transform: scale(0.9);
  }
`

export const SwapSwitchContainer = styled(Flex)`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
`

const defaultStyle = {
  cursor: 'pointer',
  color: 'textPrimary',
  fontWeight: 600,
  fontSize: '16px',
  padding: '10px',
  border: 'none',
  transition: 'all .3s linear',
  '&:hover': {
    filter: 'brightness(115%)',
  },
  '&:active': {
    transform: 'scale(0.9)',
  },
}

export const styles: Record<string, ThemeUIStyleObject> = {
  primary: {
    ...defaultStyle,
  },
  transparent: {
    ...defaultStyle,
    backgroundColor: 'transparent',
    backgroundRepeat: 'no-repeat',
    padding: '0px',
    border: 'none',
    cursor: 'pointer',
    svg: {
      background: 'transparent',
    },
  },
}
