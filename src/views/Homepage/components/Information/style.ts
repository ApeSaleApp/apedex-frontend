import styled from 'styled-components'

export const InformationWrapper = styled.div`
  position: relative;
  display: flex;
  background: ${({ theme }) => theme.colors.bgSecondary};
  padding: 20px;
  border-radius: 20px;
  gap: 12px;
  flex: 1;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const CoinIntroContainer = styled.div`
  display: flex;
  gap: 12px;
`
export const CoinIntroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const CoinNameContainer = styled.div`
  display: flex;
  align-items: center;
`

export const BtnStyled = styled.button`
  width: 18px;
  height: 18px;
  border-radius: 9px;
  padding: 4px;
  display: flex;
  align-items: center;
  margin-left: 8px;
  justify-content: center;
  background: ${({ theme }) => theme.colors.bgPrimary};
`
export const CoinValued = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
export const TagStyled = styled.div`
  background: rgba(63, 212, 171, 0.12);
  border-radius: 12px;
  padding: 6px 8px;
  gap: 2px;
  display: flex;
  align-items: flex-start;
`
export const CoinTaxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
