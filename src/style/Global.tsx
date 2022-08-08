import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { ApeSwapTheme } from '@ape.swap/uikit/dist/theme'

export declare type ButtonThemeVariant = {
  background: string
  backgroundColor: string
  backgroundActive: string
  backgroundHover: string
  border: string | number
  borderColorHover: string
  boxShadow: string
  boxShadowActive: string
  color: string
}
enum variants {
  PRIMARY = 'primary',
  DISABLED = 'disabled',
}
export declare type Colors = {
  transparent: string
  white: string
  black: string
  yellow: string
  lightYellow: string
  mint: string
  red: string
  error: string
  success: string
  secondary: string
  textActiveSecondary: string
  bgPrimary: string
  bgSecondary: string
  bgSecondaryDisabled: string
  lightGray: string
  mediumGray: string
  textPrimary: string
  textSecondary: string
  textDisabled: string
  textNote: string
  navbar: string
}
export declare type ButtonTheme = {
  [key in variants]: ButtonThemeVariant
}

export interface ApeTheme extends Omit<ApeSwapTheme, 'colors' | 'button'> {
  colors: Colors
  button: ButtonTheme
}
declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends ApeTheme {}
}

declare module '@emotion/react' {
  export interface Theme extends ApeTheme {}
}

declare module '@emotion/styled' {
  export interface DefaultTheme extends ApeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.bgSecondary};
    img {
      height: auto;
      max-width: 100%;
    }
  }
  button {
      background-color: transparent;
      border: 0;
  }
`

export default GlobalStyle
