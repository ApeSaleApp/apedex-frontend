import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { ApeSwapTheme } from '@ape.swap/uikit/dist/theme'

export declare type Colors = {
    transparent: string,
    white : string,
    black: string,
    yellow: string,
    lightYellow : string,
    mint: string,
    red: string,
    secondary: string,
    bgPrimary: string,
    bgSecondary: string,
    lightGray : string,
    mediumGray: string,
    textPrimary: string,
    textSecondary: string,
    textNote : string,
};
interface Theme extends Omit<ApeSwapTheme, "colors">{
    colors: Colors;
}
declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends Theme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
