import styled from 'styled-components'
import { Heading, Text, Button } from '@ape.swap/uikit'
import { Box } from 'theme-ui'

export const UtilityCon = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  border-radius: 10px;
  margin-bottom: 32px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 1em;
    background: ${({ theme }) => (theme.isDark ? '#212121' : theme.colors.navbar)};
  }
`
export const UtilityTitle = styled.div`
  display: none;

  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2em;
    margin-top: 1em;
  }
`
export const UtilityHeading = styled(Heading)`
  text-transform: uppercase;

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 30px;
    font-weight: 700;
  }
`

export const Options = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const OtherOptions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5em;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-top: 0;
    width: 49%;
  }
`
export const FirstOption = styled.div`
  ${({ theme }) => theme.mediaQueries.md} {
    width: 49%;
  }
`
export const PlusIcon = styled(Text)`
  color: #ffb300;
  font-family: 'Titan One';
  font-size: 48px;
  font-weight: 400;
  margin-top: -50px;
`
export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => (theme.isDark ? theme.colors.white2 : theme.colors.white3)};
  align-items: center;
  padding-left: 0.6em;
  padding-right: 0.6em;
  border-radius: 10px;

  ${({ theme }) => theme.mediaQueries.md} {
    background: ${({ theme }) => theme.colors.white3};
  }
`
export const Section2 = styled.div`
  background: ${({ theme }) => (theme.isDark ? theme.colors.white2 : theme.colors.white3)};
  border-radius: 10px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-right: 0.5em;
    padding-left: 0.5em;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    padding-right: 0;
    padding-left: 0;
    background: ${({ theme }) => theme.colors.white3};
  }
`

export const OtherOpStyle = {}

// OP DETAILS
interface OpConProps {
  type?: string
}

export const OpCon = styled.div<OpConProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => (theme.isDark ? theme.colors.white2 : theme.colors.white3)};
  padding-top: 1em;
  padding-bottom: 1em;
  border-radius: 22px;
  height: 338px;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;

  ${({ theme }) => theme.mediaQueries.md} {
    background: ${({ theme }) => theme.colors.white3};
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    padding-left: 20px;
    padding-right: 20px;
  }
`
export const OpHeadingCon = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
`
export const OpHeading = styled(Heading)`
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  line-height: 30px;
`
export const OpDescCon = styled.div`
  height: 84px;
  margin-bottom: 1em;
`
export const OpDesc = styled(Text)`
  font-size: 14px;
  text-align: center;
  line-height: 21px;
  font-weight: 600;

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 12px;
    line-height: 18px;
    font-weight: 500;
  }
`
export const AnchorTag = styled.a`
  width: 90%;
`
export const ActionButton = styled(Button)`
  padding-right: 0.1em;
  padding-left: 0.1em;
  font-weight: 700;
`

// OP CARD
export const Option1 = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.md} {
    width: 50%;
  }
`

export const HeadCard = styled.div`
  background: ${({ theme }) => (theme.isDark ? theme.colors.white2 : theme.colors.white3)};
  border-radius: 10px;
  margin-bottom: 0.5em;

  ${({ theme }) => theme.mediaQueries.md} {
    background: ${({ theme }) => theme.colors.white3};
  }
`
export const HeadBody = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
`
export const HeadTitle = styled(Heading)`
  font-size: 22px;
  color: ${({ theme }) => (theme.isDark ? '#FFFFFF' : theme.colors.text)};
  font-weight: 700;
  text-transform: uppercase;
`
export const HeadDesc = styled(Text)`
  font-size: 12px;
  color: #ffb300;
  font-weight: 500;
`
