import { Flex } from '@ape.swap/uikit'
import styled from '@emotion/styled'

const ListViewLayout = styled(Flex)`
  position: relative;
  flex-direction: column;
  align-self: center;
  max-width: 500px;
  min-width: 300px;
  width: 100%;
  margin: 20px auto;

  ${({ theme }) => theme.mediaQueries.md} {
    width: 100%;
    max-width: 1150px;
  }
`

export default ListViewLayout
