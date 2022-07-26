import { Theme } from 'theme-ui'

export const configTheme: Theme = {
  initialColorModeName: 'light',
  breakpoints: ['576px', '852px', '968px'],
  space: [0, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 48, 64],
  fontSizes: [12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 48, 64],
  borderWidths: [0, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 48, 64],
  mediaQueries: {
    xs: '@media screen and (min-width: 370px)',
    sm: '@media screen and (min-width: 576px)',
    md: '@media screen and (min-width: 852px)',
    lg: '@media screen and (min-width: 968px)',
    xl: '@media screen and (min-width: 1080px)',
    xxl: '@media screen and (min-width: undefinedpx)',
    nav: '@media screen and (min-width: 968px)',
  },
  fontWeights: {
    light: 400,
    normal: 600,
    bold: 700,
  },
  fonts: {
    titan: 'Titan One',
    poppins: 'Poppins',
  },
  radii: {
    small: '4px',
    default: '16px',
    normal: '10px',
    card: '32px',
    circle: '50%',
  },
  zIndices: {
    dropdown: 10,
    modal: 100,
  },
  colors: {
    transparent: 'transparent',
    white: '#ffffff',
    black: '#000000',
    yellow: '#FFE907',
    lightYellow: 'rgba(255, 233, 7, 0.12)',
    mint: '#3FD4AB', // mint
    red: '#EF5350',
    secondary: '#60A92A', // green
    bgPrimary: '#e5e5e5',
    bgSecondary: '#ffffff',
    lightGray: '#F6F6F6',
    mediumGray: '#F5F5F9',
    textPrimary: '#000000',
    textSecondary: 'rgba(0, 0, 0, 0.54)',
    textNote: 'rgba(0, 0, 0, 0.38)',
    modes: {
      dark: {
        transparent: 'transparent',
        white: '#ffffff',
        black: '#000000',
        lightYellow: 'rgba(255, 233, 7, 0.12)',
        mint: '#3FD4AB', // mint
        red: '#EF5350',
        secondary: '#FFE907', // yellow
        bgPrimary: '#252831',
        bgSecondary: '#33363F',
        lightGray: '#3B3E47',
        mediumGray: '#474A53',
        textPrimary: '#ffffff',
        textSecondary: 'rgba(255, 255, 255, 0.54)',
        textNote: 'rgba(255, 255, 255, 0.38)',
      },
    },
  },
  text: {
    heading: {
      fontFamily: 'poppins',
      fontWeight: 'bold',
    },
    lg: {
      fontSize: 6,
      lineHeight: '33px',
    },
    md: {
      fontSize: 3,
      lineHeight: '24px',
    },
    sm: {
      fontSize: 1,
      lineHeight: '18px',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      color: 'text',
      bg: 'background',
    },
    a: {
      color: 'primary',
      textDecoration: 'none',
      ':hover': {
        color: 'secondary',
        textDecoration: 'underline',
      },
    },
    nav: {
      breakpoints: ['@media screen and (min-width: 968px)'],
    },
    progress: {
      primary: 'primary',
      color: 'green',
      background: '#DAA628',
      height: '20px',
    },
    hr: {
      background: 'dividerColor',
      height: '1px',
      border: 'none',
    },
    h1: {
      variant: 'text.heading',
      fontSize: '30px',
      lineHeight: '45px',
    },
    h2: {
      variant: 'text.heading',
      fontSize: '25px',
      lineHeight: '37px',
    },
    h3: {
      variant: 'text.heading',
      fontSize: '22px',
      lineHeight: '33px',
    },
    h4: {
      variant: 'text.heading',
      fontSize: '20px',
      lineHeight: '30px',
    },
    h5: {
      variant: 'text.heading',
      fontSize: '16px',
      lineHeight: '24px',
    },
    banner: {
      variant: 'text.heading',
      fontWeight: '800',
      fontSize: '60px',
      lineHeight: '66px',
    },
  },
  forms: {
    input: {
      sm: {
        background: 'white3',
        borderRadius: 10,
        height: '32px',
        width: '200px',
      },
      md: {
        background: 'white3',
        borderRadius: 10,
        height: '36px',
        width: '200px',
      },
      lg: {
        background: 'white3',
        borderRadius: 14,
        height: '48px',
        width: '200px',
      },
    },
    textarea: {
      padding: '10px 13px 10px 10px',
      borderRadius: 'normal',
      border: 'none',
      fontWeight: 'normal',
      background: 'lvl1',
      resize: 'none',
      color: 'textareaColor',
      '&:focus': {
        outline: 'none !important',
      },
    },
    checkbox: {
      background: 'lvl1',
      borderRadius: '5px',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'lvl2',
      boxShadow: 'none',
      outline: 'none',
      appearance: 'none',
      width: 'inherit',
      height: 'inherit',
      margin: '0px',
      cursor: 'pointer',
      '& + svg': {
        display: 'none',
        position: 'absolute',
        pointerEvents: 'none',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        margin: 'auto',
      },
      '&:checked ': {
        background: 'yellow',
        borderColor: 'yellow',
        '& + svg': {
          display: 'block',
        },
      },
      '&:focus:not(:checked)': {
        outline: 'none',
        boxShadow: 'none',
      },
      '&:focus': {
        outline: 'none',
        boxShadow: '0px 0px 0px 1px #FFB300, 0px 0px 0px 4px rgb(255, 179, 0, .4)',
      },
      '&:hover:not(:disabled):not(:checked)': {
        borderColor: 'yellow',
        boxShadow: '0px 0px 0px 1px #FFB300, 0px 0px 0px 4px rgb(255, 179, 0, .4)',
      },
    },
    radio: {
      background: 'lvl1',
      borderRadius: '50px',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'lvl2',
      boxShadow: 'none',
      outline: 'none',
      appearance: 'none',
      width: 'inherit',
      height: 'inherit',
      margin: '0px',
      cursor: 'pointer',
      '& + span': {
        display: 'none',
        position: 'absolute',
        pointerEvents: 'none',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        margin: 'auto',
        backgroundColor: 'radioChecked',
        borderRadius: '50px',
      },
      '&:checked ': {
        background: 'yellow',
        borderColor: 'yellow',
        '& + span': {
          display: 'block',
        },
      },
      '&:focus': {
        outline: 'none',
        boxShadow: '0px 0px 0px 1px #FFB300, 0px 0px 0px 4px rgb(255, 179, 0, .2)',
      },
      '&:hover:not(:disabled):not(:checked)': {
        borderColor: 'yellow',
      },
    },
    label: {
      inline: {
        display: 'inline-flex',
        alignItems: 'center',
        columnGap: 2,
      },
    },
  },
  borders: {
    primaryButton: '3px solid #FFB300',
    primaryBtnDisable: '3px solid transparent',
    secondaryButton: '3px solid #FFB300',
    secondaryButtonDisable: '3px solid #FDFBF5',
    mode: {
      dark: {
        secondaryButtonDisable: '3px solid #F9F4E7',
      },
    },
  },
  buttons: {
    primary: {
      padding: '10px 20px 10px 19px',
      fontSize: '16px',
      cursor: 'pointer',
      fontWeight: 'bold',
      '&&': {
        borderRadius: 'normal',
      },
      background: 'yellow',
      border: 'secondary',
      color: 'textPrimary',
      '&:disabled': {
        cursor: 'not-allowed',
        background: 'textNote',
        color: 'mediumGray',
      },
      '&:hover': {
        '&:not([disabled])': {
          borderColor: 'hoveredYellow',
          background: 'hoveredYellow',
        },
        '&:disabled': {},
      },
    },
  },
  cards: {
    primary: {
      background: 'navbar',
      borderRadius: 'normal',
    },
  },
}

export const lightTheme = {
  siteWidth: 1200,
  breakpoints: ['370px', '576px', '852px', '968px', '1080px', '1200px'],
  mediaQueries: {
    xs: '@media screen and (min-width: 370px)',
    sm: '@media screen and (min-width: 576px)',
    md: '@media screen and (min-width: 852px)',
    lg: '@media screen and (min-width: 968px)',
    xl: '@media screen and (min-width: 1080px)',
    xxl: '@media screen and (min-width: 1200px)',
    nav: '@media screen and (min-width: 968px)',
  },
  spacing: [0, 4, 8, 16, 24, 32, 48, 64],
  fontFamily: {
    poppins: 'Poppins',
  },
  shadows: {
    level1: '0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)',
    active: '0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)',
    success: '0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)',
    warning: '0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)',
    focus: '0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)',
    yellow: '0px 0px 0px 1px #FFB300, 0px 0px 0px 4px rgb(255, 179, 0, .4)',
    inset: 'inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)',
  },
  radii: {
    card: '32px',
    circle: '50%',
    default: '16px',
    normal: '10px',
    small: '4px',
  },
  zIndices: {
    dropdown: 10,
    modal: 100,
  },
  isDark: false,
  colors: {
    transparent: 'transparent',
    white: '#ffffff',
    black: '#000000',
    yellow: '#FFE907',
    lightYellow: 'rgba(255, 233, 7, 0.12)',
    mint: '#3FD4AB', // mint
    red: '#EF5350',
    secondary: '#60A92A', // green
    bgPrimary: '#e5e5e5',
    bgSecondary: '#ffffff',
    lightGray: '#F6F6F6',
    mediumGray: '#F5F5F9',
    textPrimary: '#000000',
    textSecondary: 'rgba(0, 0, 0, 0.54)',
  },
  button: {
    primary: {
      background: '#60A92A',
      backgroundActive: '#60A92A',
      backgroundHover: '#60A92A',
      border: 0,
      borderColorHover: 'currentColor',
      boxShadow: 'none',
      boxShadowActive: 'none',
      color: '#ffffff',
    },
    disabled: {
      background: '#F5F5F9',
      backgroundActive: '#F5F5F9',
      backgroundHover: '#F5F5F9',
      border: 0,
      borderColorHover: 'currentColor',
      boxShadow: 'none',
      boxShadowActive: 'none',
      color: 'rgba(0, 0, 0, 0.38)',
    },
  },
}

export const darkTheme = {
  siteWidth: 1200,
  breakpoints: ['370px', '576px', '852px', '968px', '1080px', '1200px'],
  mediaQueries: {
    xs: '@media screen and (min-width: 370px)',
    sm: '@media screen and (min-width: 576px)',
    md: '@media screen and (min-width: 852px)',
    lg: '@media screen and (min-width: 968px)',
    xl: '@media screen and (min-width: 1080px)',
    xxl: '@media screen and (min-width: 1200px)',
    nav: '@media screen and (min-width: 968px)',
  },
  spacing: [0, 4, 8, 16, 24, 32, 48, 64],
  fontFamily: {
    poppins: 'Poppins',
  },
  shadows: {
    level1: '0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)',
    active: '0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)',
    success: '0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)',
    warning: '0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)',
    focus: '0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)',
    yellow: '0px 0px 0px 1px #FFB300, 0px 0px 0px 4px rgb(255, 179, 0, .4)',
    inset: 'inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)',
  },
  radii: {
    card: '32px',
    circle: '50%',
    default: '16px',
    normal: '10px',
    small: '4px',
  },
  zIndices: {
    dropdown: 10,
    modal: 100,
  },
  isDark: true,
  colors: {
    transparent: 'transparent',
    white: '#ffffff',
    black: '#000000',
    lightYellow: 'rgba(255, 233, 7, 0.12)',
    mint: '#3FD4AB', // mint
    red: '#EF5350',
    secondary: '#FFE907', // yellow
    bgPrimary: '#252831',
    bgSecondary: '#33363F',
    lightGray: '#3B3E47',
    mediumGray: '#474A53',
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.54)',
  },
  button: {
    primary: {
      background: '#FFE907',
      backgroundActive: '#FFE907',
      backgroundHover: '#FFE907',
      border: 0,
      borderColorHover: 'currentColor',
      boxShadow: 'none',
      boxShadowActive: 'none',
      color: '#000000',
    },
    disabled: {
      background: '#474A53',
      backgroundActive: '#474A53',
      backgroundHover: '#474A53',
      border: 0,
      borderColorHover: 'currentColor',
      boxShadow: 'none',
      boxShadowActive: 'none',
      color: 'rgba(255, 255, 255, 0.38)',
    },
  },
}
