import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const TitleKns = () => {
  return (
    <>
      <Grid container maxWidth="lg" margin="auto">
        <Grid item xs={12} sm={12} md={12}>
          <Typography
            className="font_title"
            sx={{
              textAlign: 'center',
              fontSize: '3rem',
              textTransform: 'uppercase',
              color: '#333333',

              padding: '3% 0',
              typography: {
                md: { fontSize: '3rem' },
                sm: { fontSize: '2rem' },
                xs: { fontSize: '1.5rem' },
              },
            }}
          >
            <Link to="/chuyen-muc/ky-nguyen-so" className="text-link-logo" sx={{ textDecoration: 'none', color: '#212529' }}>
              CÔNG NGHỆ MỚI
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default TitleKns
