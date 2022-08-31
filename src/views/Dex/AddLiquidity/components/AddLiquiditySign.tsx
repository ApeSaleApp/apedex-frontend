import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import React from 'react'
import { styles } from './styles'

const AddLiquiditySign: React.FC = () => (
  <Flex sx={{ ...styles.swapSwitchContainer }}>
    <Flex sx={{ ...styles.swapSwitchButton }}>
      <Text color="textActiveSecondary" size="20px" sx={{ lineHeight: '0px' }}>
        +
      </Text>
    </Flex>
  </Flex>
)

export default React.memo(AddLiquiditySign)
