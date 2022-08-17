import { ThemeUIStyleObject } from 'theme-ui'
import { textUnderlineHover } from 'views/Dex/styles'

export const styles: Record<string, ThemeUIStyleObject> = {
  // Token selector container
  dexNavContainer: {
    position: 'relative',
    width: '100%',
    height: '30px',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  navLinkContainer: {
    width: '100%',
    maxWidth: '225px',
    paddingRight: '20px',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  navIconContainer: {
    width: '100%',
    maxWidth: '60px',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  underline: {
    display: 'inline-block',
    position: 'relative',
    background: 'textPrimary',
    height: '1px',
    width: '100%',
    borderRadius: '10px',
  },
  navLink: {
    position: 'relative',
    cursor: 'pointer',
    padding: '10px',
    ':hover': {
      fontWeight: 'bolder',
    },
  },

  navLinkActive: {
    background: 'secondary',
    color: 'textActiveSecondary',
    borderRadius: '12px',
  },
}
