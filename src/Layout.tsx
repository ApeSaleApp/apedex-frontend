import React, { useState } from 'react'
import { Drawer } from 'components/Drawer'
import { Header } from 'components/Header'
import styled from 'styled-components'

const LayoutWrapper = styled.div`
  display: flex;
`
const Main = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  ${({ theme }) => theme.mediaQueries.md} {
    border-top-left-radius: 35px;
    border-bottom-left-radius: 35px;
  }
`
const ContentWrapper = styled.div`
  display: flex;
  width: 95%;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 2% 0;
  gap: 16px;
  justify-content: flex-start;
  align-items: center;
`

export const Layout = ({ children }) => {
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false)
  return (
    <LayoutWrapper>
      <Drawer toggleDrawer={toggleDrawer} setToggleDrawer={setToggleDrawer} />
      <Main>
        <Header toggleDrawer={toggleDrawer} setToggleDrawer={setToggleDrawer} />
        <ContentWrapper>{children}</ContentWrapper>
      </Main>
    </LayoutWrapper>
  )
}
