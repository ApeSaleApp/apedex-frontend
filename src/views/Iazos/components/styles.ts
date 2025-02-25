import styled from 'styled-components'
import { Text } from '@ape.swap/uikit'

export const BoldAfterText = styled(Text)<{ boldContent?: string }>`
  font-weight: 400;
  font-size: 11px;
  &:after {
    font-weight: 700;
    content: '${(props) => props.boldContent}';
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 16px;
  }
`

export const BoldAfterTextLarge = styled(Text)<{ boldContent?: string }>`
  font-weight: 400;
  font-size: 13px;
  &:after {
    font-weight: 700;
    font-size: 14px;
    ${({ theme }) => theme.mediaQueries.md} {
      font-size: 17px;
    }
    content: '${(props) => props.boldContent}';
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 16px;
  }
`

export const Heading = styled(Text)`
  font-weight: 700;
  font-size: 25px;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 30px;
  }
`

export const StyledText = styled(Text)`
  font-size: 12px;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 16px;
  }
`
