import { PARTNER } from 'components/Drawer/menu'
import useTheme from 'hooks/useTheme'
import React from 'react'
import { Box } from 'theme-ui'

export const Partner = () => {
  const { isDark } = useTheme()
  return (
    <Box sx={{ marginTop: '8px' }}>
      {PARTNER.map((partner) => (
        <a key={partner.id} href={partner.url} style={{ marginLeft: '8px' }} target="_blank" rel="noreferrer">
          <img src={!isDark ? partner.iconLight || partner.icon : partner.icon} alt={partner.url} />
        </a>
      ))}
    </Box>
  )
}
