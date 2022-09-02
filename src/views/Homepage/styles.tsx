import styled, { keyframes } from 'styled-components'

export const HomeWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`
export const Banner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  height: 788px;
  width: 100%;
  background-image: ${({ theme }) => (theme.isDark ? 'url(images/banner-night.svg)' : 'url(images/banner-day.svg)')};
  background-size: cover;
  background-repeat: no-repeat;
`
export const FadeIn = keyframes`
    0%{opacity: .5};
    100%{opacity: 1};
`

export const FadeOut = keyframes`
    0%{opacity: 1};
    100%{opacity: 0};
`
export const ChartWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`

export const ButtonChartStyled = styled.button`
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 0px;
  padding: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  color: inherit;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  position: relative;
  border-radius: 22px;
  height: 22px;
  background: ${({ theme }) => (theme.isDark ? theme.colors.bgPrimary : 'white')};
  border: 1px solid ${({ theme }) => (theme.isDark ? ' #707070' : 'rgba(0, 0, 0, 0.12)')};
  border-radius: 11.5px;
  margin-right: auto;
`
export const OnOffStyled = styled.div`
  font-size: 14px;
  line-height: 19px;
  padding-left: 8px;
  padding-right: 36px;
  color: ${({ theme }) => theme.colors.secondary};
  height: 100%;
  transition: all 300ms linear;
  &.deactive {
    padding-right: 8px;
    padding-left: 36px;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`
export const ThumbSwitchStyled = styled.div`
  position: absolute;
  width: 28px;
  height: 28px;
  left: 37px;
  display: flex;
  border-radius: 50%;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => (theme.isDark ? ' #707070' : 'rgba(0, 0, 0, 0.12)')};
  box-shadow: rgb(26 26 27 / 10%) 0px 6px 12px 0px;
  transition: all 200ms linear;
  &.deactive {
    left: -1px;
  }
`
