import React from 'react'
import styled from 'styled-components'
import { Address } from 'config/constants/types'
import BigNumber from 'bignumber.js'
import { Flex } from '@ape.swap/uikit'

import ApyButton from '../../../../components/ApyCalculator/ApyButton'
import { useTranslation } from '../../../../contexts/Localization'

export interface AprProps {
  poolApr?: string
  tokenAddress?: Address
  quoteTokenAddress?: Address
  bananaPrice?: BigNumber
  originalValue?: number
  hideButton?: boolean
  earnToken?: string
  apr?: BigNumber
  rewardTokenPrice?: number
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.text};

  button {
    width: 20px;
    height: 20px;

    svg {
      path {
        fill: #ffb300;
      }
    }
  }

  width: 184px;
`

const AprWrapper = styled.div`
  text-align: left;
  font-size: 20px;
  font-weight: 800;
`

const Apr: React.FC<AprProps> = ({ hideButton = false, poolApr, earnToken, rewardTokenPrice, apr }) => {
  const { t } = useTranslation()

  return poolApr !== '0' ? (
    <Container>
      {poolApr ? (
        <Flex justifyContent="center" className="noClick">
          <AprWrapper>{poolApr}%</AprWrapper>
          {!hideButton && (
            <ApyButton
              lpLabel={earnToken}
              rewardTokenName={earnToken}
              addLiquidityUrl="https://apeswap.finance/swap"
              rewardTokenPrice={rewardTokenPrice}
              apy={apr.div(100)?.toNumber()}
            />
          )}
        </Flex>
      ) : (
        <AprWrapper>{t('Loading...')}</AprWrapper>
      )}
    </Container>
  ) : (
    <Container>
      <AprWrapper>{poolApr}%</AprWrapper>
    </Container>
  )
}

export default Apr
