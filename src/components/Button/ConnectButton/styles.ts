import { ThemeUIStyleObject } from 'theme-ui'

export const dynamicStyles: Record<string, (props: any) => ThemeUIStyleObject> = {
  userBlockBtn: ({ account }) => ({
    height: '35px',
    marginLeft: '10px',
    lineHeight: '10px',
    background: account ? 'lightGray' : 'secondary',
    color: account ? 'textSecondary' : 'textActiveSecondary',
    '&&': {
      padding: `0px 15px 0px 15px`,
    },
  }),
}
