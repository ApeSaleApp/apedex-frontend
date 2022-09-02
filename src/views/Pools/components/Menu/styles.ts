import { Text, Flex, Button } from '@ape.swap/uikit'
import styled from '@emotion/styled'

export const ControlContainer = styled(Flex)`
  align-items: center;
  position: relative;
  flex-wrap: wrap;
  border-radius: 10px;
  justify-content: space-between;
  flex-direction: row;
  padding: 15px;
  z-index: 1;
  gap: 5px;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  min-width: 300px;
  max-width: 500px;
  width: 100%;
  margin: 20px 0px;
  align-self: center;
  height: 250px;
  padding: 10px 30px;
  ${({ theme }) => theme.mediaQueries.sm} {
    height: 180px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
    min-height: 59px;
    height: 100%;
    padding: 10px 50px 10px 30px;
    align-items: center;
    max-width: 100%;
    height: auto;
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    padding: 10px 30px 10px 30px;
  }
`

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  }
`

export const StyledText = styled(Text)`
  font-weight: 700;
  font-size: 16px !important;
  margin-left: 16px;
`

export const LearnMoreButton = styled(Button)`
  height: 36px;
  width: 192px;
  align-items: center;
  padding-left: 40px;
  color: ${({ theme }) => theme.colors.secondary};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
`

export const ClaimAllWrapper = styled(Flex)`
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: auto;
  }
`

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
   {
    margin-left: 4px;
    ${({ theme }) => theme.mediaQueries.md} {
      margin-left: 8px;
    }
  }
`
