import { colorProps } from 'style/Global'
import { CardProps as ThemeUICardProps } from 'theme-ui'

export interface CardProps extends ThemeUICardProps {
  background?: colorProps
}
