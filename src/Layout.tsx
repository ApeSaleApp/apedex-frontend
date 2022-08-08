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
export const Layout = ({ children }) => {
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false)
  return (
    <LayoutWrapper>
      <Drawer toggleDrawer={toggleDrawer} setToggleDrawer={setToggleDrawer} />
      <Main>
        <Header toggleDrawer={toggleDrawer} setToggleDrawer={setToggleDrawer} />
        {children}
      </Main>
    </LayoutWrapper>
  )
}
