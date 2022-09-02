import { ThemeUIStyleObject } from 'theme-ui'

export const buttonHover = {
  '&:not([disabled])': { borderColor: 'secondary', background: 'secondary', color: 'textActiveSecondary' },
  '&:disabled': {},
}

export const textUnderlineHover: Record<string, ThemeUIStyleObject> = {
  '::after': {
    content: "''",
    position: 'absolute',
    background: 'text',
    left: '0px',
    bottom: '0px',
    height: '2px',
    width: '100%',
    borderRadius: '10px',
    transform: 'scaleX(0)',
    transformOrigin: 'bottom right',
    transition: 'transform 0.25s ease-out',
    backfaceVisibility: 'hidden',
  },
  ':hover::after': {
    transform: 'scaleX(1)',
    transformOrigin: 'bottom left',
  },
}

export const dexStyles: Record<string, ThemeUIStyleObject> = {
  pageContainer: {
    justifyContent: 'center',
    height: 'fit-content',
    width: '30%',
    minWidth: '350px',
    '@media screen and (max-width: 900px)': {
      width: '100%',
    },
  },
  dexContainer: {
    width: 'auto',
    maxWidth: '420px',
    height: 'fit-content',
    background: 'bgSecondary',
    padding: '15px',
    borderRadius: '10px',
    flexDirection: 'column',
    '@media screen and (max-width: 900px)': {
      width: '100%',
      maxWidth: '100%',
    },
  },
  textWrap: {
    wordBreak: 'break-all',
    lineHeight: '15px',
  },
}
