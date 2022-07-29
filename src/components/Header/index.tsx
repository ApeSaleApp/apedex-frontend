import useTheme from 'hooks/useTheme'
import React from 'react'

export const Header = () => {
  const { isDark } = useTheme()
  return <div>Header</div>
}
