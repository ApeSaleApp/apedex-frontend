/** @jsxImportSource theme-ui */
import { Link, useHistory } from 'react-router-dom'
import { Flex, Text, useModal } from '@ape.swap/uikit'
import { useTranslation } from 'contexts/Localization'
import React from 'react'
import { CHAIN_ID } from 'config/constants/chains'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { Icon } from 'components/Icons'
import GlobalSettings from 'components/Menu/GlobalSettings'
import { styles } from './styles'

const DexNav = () => {
  const { t } = useTranslation()
  const { pathname } = useHistory().location
  const { chainId } = useActiveWeb3React()

  const onLiquidity =
    pathname?.includes('add') ||
    pathname?.includes('pool') ||
    pathname?.includes('remove') ||
    pathname?.includes('find')

  return (
    <Flex sx={styles.dexNavContainer}>
      <Flex
        sx={{ ...styles.navLinkContainer, justifyContent: chainId === CHAIN_ID.BSC ? 'space-between' : 'flex-start' }}
      >
        <Text
          size="14px"
          sx={{
            ...styles.navLink,
            ...styles[pathname?.endsWith('/') ? 'navLinkActive' : 'scd'],
            mr: chainId === CHAIN_ID.BSC ? '0px' : '30px',
          }}
          as={Link}
          to="/"
          id="swap-link"
          className="swap"
        >
          {t('Swap')}
        </Text>
        {chainId === CHAIN_ID.BSC && (
          <Text
            size="14px"
            sx={{
              ...styles.navLink,
              ...styles[pathname?.includes('orders') ? 'navLinkActive' : 'scd'],
            }}
            as={Link}
            to="/orders"
            id="orders-link"
            className="orders"
          >
            {t('Orders')}
          </Text>
        )}
        <Text
          size="14px"
          sx={{ ...styles.navLink, ...styles[pathname?.includes('add') ? 'navLinkActive' : 'scd'] }}
          as={Link}
          to="/add"
          id="liquidity-link"
          className="liquidity"
        >
          {t('Liquidity')}
        </Text>
      </Flex>
      <Flex sx={{ ...styles.navIconContainer }}>
        <GlobalSettings />
      </Flex>
    </Flex>
  )
}

export default React.memo(DexNav)
