import styled from 'styled-components'

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
