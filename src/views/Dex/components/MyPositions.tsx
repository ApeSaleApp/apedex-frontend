/** @jsxImportSource theme-ui */
import { Flex } from 'components/Flex'
import { Svg } from 'components/Svg'
import { Text } from 'components/Text'
import { useTranslation } from 'contexts/Localization'
import React from 'react'
import { Link } from 'react-router-dom'
import { textUnderlineHover } from '../styles'

const MyPositions: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Flex
      sx={{
        margin: '0px 0px 40px 0px',
        width: 'fit-content',
        alignItems: 'center',
        position: 'relative',
        lineHeight: '24px',
        ...textUnderlineHover,
      }}
      as={Link}
      to="/liquidity/pool"
    >
      <Svg icon="caret" direction="left" width="7px" />
      <Text size="12px" ml="5px">
        {t('My positions')}
      </Text>
    </Flex>
  )
}

export default React.memo(MyPositions)
