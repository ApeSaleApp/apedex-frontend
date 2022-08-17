import { Text } from 'components/Text'
import { useTranslation } from 'contexts/Localization'
import React from 'react'
import { Icon } from 'components/Icons'
import { formatNumber } from 'utils'
import { ButtonStyled } from 'components/Button/style'
import { Flex } from 'components/Flex'
import {
  CoinIntroContainer,
  CoinNameContainer,
  InformationWrapper,
  BtnStyled,
  CoinValued,
  TagStyled,
  CoinIntroContent,
  CoinTaxWrapper,
} from './style'
import { Partner } from './Partner'

export const Information: React.FC = () => {
  const { t } = useTranslation()

  const handleSwap = () => {
    console.log('')
  }
  return (
    <InformationWrapper>
      <CoinIntroContainer>
        <img
          src="/image-ape/logo.png"
          alt="ape logo"
          style={{ width: '20%', maxWidth: '60px', objectFit: 'contain' }}
        />
        <CoinIntroContent>
          <CoinNameContainer>
            <Text color="textSecondary" textTransform="uppercase">
              APES
            </Text>
            <Text color="textPrimary" textTransform="uppercase">
              /BUSD
            </Text>
            <BtnStyled onClick={handleSwap}>
              <Icon iconName="icon-swap" color="textPrimary" size="10px" />
            </BtnStyled>
          </CoinNameContainer>
          <CoinValued>
            <Text color="textPrimary" size="20px" textTransform="uppercase">
              0.9085
            </Text>
            <Text color="textSecondary" size="20px" textTransform="uppercase">
              BUSD
            </Text>
            <TagStyled>
              <Icon iconName="icon-arrow-up2" size="10px" color="mint" />
              <Text color="mint" size="12px">
                +168%
              </Text>
            </TagStyled>
          </CoinValued>
        </CoinIntroContent>
      </CoinIntroContainer>

      <CoinTaxWrapper>
        <div>
          <Text color="textSecondary" textTransform="uppercase">
            {t('Buy Tax')}:
          </Text>
          <Text color="textPrimary" textTransform="uppercase">
            {' '}
            8%
          </Text>
        </div>
        <div>
          <Text color="textSecondary" textTransform="uppercase">
            {t('Sell Tax')}:
          </Text>
          <Text color="textPrimary" textTransform="uppercase">
            {' '}
            8%
          </Text>
        </div>
      </CoinTaxWrapper>
      <CoinTaxWrapper>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingRight: '7px', position: 'relative' }}>
          <Text color="textSecondary" textTransform="uppercase">
            {t('24h Volume')}:
          </Text>
          <Text color="textPrimary" textTransform="uppercase">
            {' '}
            ${formatNumber(98067)}
          </Text>
          <img
            src="/image-ape/chart-image.png"
            alt=""
            style={{
              width: '75px',
              maxWidth: '60px',
              objectFit: 'contain',
              position: 'absolute',
              top: '-50%',
              right: 0,
            }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingRight: '70px', position: 'relative' }}>
          <Text color="textSecondary" textTransform="uppercase">
            {t('Marketcap')}:
          </Text>
          <Text color="textPrimary" textTransform="uppercase">
            {' '}
            ${formatNumber(2098185)}
          </Text>
          <img
            src="/image-ape/chart-image.png"
            style={{
              width: '75px',
              maxWidth: '60px',
              objectFit: 'contain',
              position: 'absolute',
              top: '-50%',
              right: 0,
            }}
            alt=""
          />
        </div>
      </CoinTaxWrapper>
      <Flex sx={{ gap: '8px', justifySelf: 'end', flexDirection: 'column', alignItems: 'flex-end' }}>
        <Flex sx={{ gap: '8px', alignItems: 'center' }}>
          <Text size="12px" style={{ textAlign: 'right', lineHeight: '14.4px' }} color="error">
            {t('An unlocked wallet is holding')} 93.46%
          </Text>
          <ButtonStyled>{t('check')}</ButtonStyled>
        </Flex>
        <Partner />
      </Flex>
    </InformationWrapper>
  )
}
