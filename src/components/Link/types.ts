import { TextProps } from '@ape.swap/uikit'
import { AnchorHTMLAttributes } from 'react'
import { LinkProps as Props, ThemeUICSSObject } from 'theme-ui'

export interface LinkProps extends Omit<TextProps, 'onAbort'>, AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean
}

export interface LinkExternalProps extends Props {
  display?: ThemeUICSSObject['display']
  textAlign?: ThemeUICSSObject['textAlign']
}
