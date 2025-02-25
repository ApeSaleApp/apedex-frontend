import {Tag,  Button, Flex } from '@ape.swap/uikit'
import styled from 'styled-components'

export const StyledButton = styled(Button)`
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  padding: 10px 20px;
  min-width: 227px;
  height: 44px;
`

export const SmallButton = styled(Button)`
  max-width: 44px;
  height: 44px;
`

export const ActionContainer = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  ${({ theme }) => theme.mediaQueries.md} {
    width: auto;
  }
`

export const CenterContainer = styled(Flex)`
  width: 100%;
  justify-content: center;
  ${({ theme }) => theme.mediaQueries.md} {
    width: auto;
    justify-content: auto;
  }
`

export const StyledTag = styled(Tag)`
  font-size: 10px;
  padding: 0px 6px !important;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  height: auto;
  width: max-content;
`
