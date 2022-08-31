/** @jsxImportSource theme-ui */
import { Flex } from 'components/Flex'
import { Svg } from 'components/Svg'
import React from 'react'
import { FlexStyled, SwapSwitchContainer } from './style'

const SwapSwitchButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <SwapSwitchContainer>
    <FlexStyled onClick={onClick}>
      <Svg icon="swapArrows" width="13px" />
    </FlexStyled>
  </SwapSwitchContainer>
)

export default React.memo(SwapSwitchButton)
