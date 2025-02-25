import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Text } from '@ape.swap/uikit'
import { useTranslation } from 'contexts/Localization'

const TopNav: React.FC = () => {
  const { t } = useTranslation()
  return (
    <TopNavWrapper>
      <TopNavMonkey />
      <Link to="/ss-iao">
        <BackWrapper>
          <BackArrow src="/images/left-arrow.svg" />
          <StyledText color="primaryBright">{t('Back to Self-Serve Launchpad')}</StyledText>
        </BackWrapper>
      </Link>
    </TopNavWrapper>
  )
}

const TopNavWrapper = styled.div`
  position: relative;
  height: 60px;
  width: 320px;
  border-radius: 20px 20px 0px 0px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  background: ${({ theme }) => (theme.isDark ? theme.colors.white3 : theme.colors.primary)};
  z-index: 0;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 856px;
  }
`

const TopNavMonkey = styled.div`
  position: absolute;
  height: 60px;
  width: 100px;
  right: 20px;
  overflow: hidden;
  background: url(/images/header-ape.svg) no-repeat 0px 10px;
  opacity: 0.2;
  z-index: 0;
`

const BackWrapper = styled.div`
  z-index: 1;
  display: flex;
`

const BackArrow = styled.img`
  cursor: pointer;
  margin-right: 20px;
`

const StyledText = styled(Text)`
  font-size: 12px;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 16px;
  }
`

export default TopNav
