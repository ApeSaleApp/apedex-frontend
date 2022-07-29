import { Drawer } from 'components/Drawer'
import React from 'react'

export const Layout = ({ children }) => {
  return (
    <div>
      <Drawer />
      {children}
    </div>
  )
}
