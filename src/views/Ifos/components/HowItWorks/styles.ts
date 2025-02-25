import styled from 'styled-components'
import { Text, Heading } from '@ape.swap/uikit'

export const StyledText = styled(Text)`
  font-weight: 300;
`

export const FeatureBox = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`

export const B = styled(Text).attrs({
  as: 'span',
})`
  font-weight: 600;
`

export const SectionHeading = styled(Heading)`
  font-weight: 600;
`

export const Frame = styled.div`
  margin-top: 48px;
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px 20px;
    grid-auto-flow: row;
    grid-template-areas:
      '. .'
      '. .';
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.navbar};
  margin-bottom: 57px;
  padding: 30px 20px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 30px 50px;
  }
`

export const IconBox = styled.div`
  border-radius: 5px;
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.white3};
  position: relative;
  flex-shrink: 0;
`

export const CenteredImage = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
