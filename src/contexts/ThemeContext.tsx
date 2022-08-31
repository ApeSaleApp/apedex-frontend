import React, { useState } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { ThemeProvider as ThemeUIProvider } from 'theme-ui'
import { configTheme, darkTheme, lightTheme } from 'config/configTheme'
import { light, dark, Apeswap } from '@ape.swap/uikit'

const CACHE_KEY = 'IS_DARK'

const ThemeContext = React.createContext({
  isDark: null,
  toggleTheme: () => null,
})

const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const isDarkUserSetting = localStorage.getItem(CACHE_KEY)
    return isDarkUserSetting ? JSON.parse(isDarkUserSetting) : true
  })

  const toggleTheme = () => {
    setIsDark((prevState) => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState))
      return !prevState
    })
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <SCThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <ThemeUIProvider theme={configTheme}>{children}</ThemeUIProvider>
      </SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
