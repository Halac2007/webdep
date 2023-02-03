import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import AdbIcon from '@mui/icons-material/Adb'

const Footer = () => {
  return (
    <Grid container maxWidth="900px" m="auto" p="30px 10px" sx={{ borderTop: '1px solid #333333', marginTop: '15px' }}>
      <Grid container item xs={12} sm={3} md={3} spacing={1}>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 6,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 900,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          <img src="logo-goc.png" alt="" width="100%" />
        </Typography>
      </Grid>
      <Grid container item xs={12} sm={9} md={9} spacing={1}>
        <Box>
          <Typography>Copyright © 2008-2015 - Chịu trách nhiệm quản lý nội dung:</Typography>
          <Typography>Hotline: (84)-111111 (ext: 62173) - Email: demo@gmail.com</Typography>
          <Typography>Địa chỉ: Quận Tân Bình, TP.HCM</Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Footer
