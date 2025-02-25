import React from 'react'
import { Text, useMatchBreakpoints, Skeleton } from '@ape.swap/uikit'
import { BLOCK_EXPLORER } from 'config/constants/chains'
import { useNetworkChainId } from 'state/hooks'
import { useTranslation } from 'contexts/Localization'
import {
  IazoCardWrapper,
  CardMonkey,
  TokenHeaderInformationWrapper,
  TokenImage,
  TokenName,
  TokenButtonsWrapper,
  TokenInfoButton,
} from './styles'

interface TokenInfoCardProps {
  tokenName: string
  tokenAddress: string
  tokenWebsite?: string
  tokenImage: string
  contractAddress: string
}

const TokenInfoCard: React.FC<TokenInfoCardProps> = ({
  tokenName,
  tokenAddress,
  tokenWebsite,
  tokenImage,
  contractAddress,
}) => {
  const { isMd, isSm, isXs } = useMatchBreakpoints()
  const chainId = useNetworkChainId()
  const isMobile = isMd || isSm || isXs
  const formatTokenAddress = `${tokenAddress?.slice(0, 5)}...${tokenAddress?.slice(
    tokenAddress?.length - 3,
    tokenAddress?.length,
  )}`
  const tokenLink = `${BLOCK_EXPLORER[chainId]}/address/${tokenAddress}`
  const contractLink = `${BLOCK_EXPLORER[chainId]}/address/${contractAddress}`
  const { t } = useTranslation()

  return (
    <IazoCardWrapper>
      <CardMonkey />
      <TokenImage src={tokenImage} />
      <TokenHeaderInformationWrapper>
        <TokenName color="white"> {tokenName || <Skeleton width="200px" height="35px" />} </TokenName>
        <TokenButtonsWrapper>
          <TokenInfoButton opacity="1">
            <a href={contractLink} target="_blank" rel="noopener noreferrer">
              <Text fontSize={isMobile ? '11px' : '15px'} color="white1">
                {t('BscScan')}
              </Text>
            </a>
          </TokenInfoButton>
          <TokenInfoButton opacity=".1">
            <a href={tokenLink} target="_blank" rel="noopener noreferrer">
              <Text fontSize={isMobile ? '11px' : '15px'} color="white1">
                {formatTokenAddress}
              </Text>
            </a>
          </TokenInfoButton>
          <TokenInfoButton opacity=".1">
            <a href={tokenWebsite} target="_blank" rel="noopener noreferrer">
              <Text fontSize={isMobile ? '11px' : '15px'} color="white1">
                {t('Website')}
              </Text>
            </a>
          </TokenInfoButton>
        </TokenButtonsWrapper>
      </TokenHeaderInformationWrapper>
    </IazoCardWrapper>
  )
}

export default TokenInfoCard
