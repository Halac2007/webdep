import { Grid, Link, Paper, Typography } from '@mui/material'
import React from 'react'

import { styled } from '@mui/material/styles'

const CateBox = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  border: 'none',
  boxShadow: 'none',
  color: theme.palette.text.secondary,
}))

const MainPosts = ({ mainpost, side }) => {
  return (
    <>
      <Grid container maxWidth="lg" margin="auto">
        <Grid
          container
          spacing={{
            xs: 1,
            sm: 2,
            md: 1,
          }}
        >
          <Grid item xs={12} sm={8} md={8}>
            <CateBox>
              {mainpost.map((item) => (
                <Link key={Math.random()} href={item.link} sx={{ textDecoration: 'none', color: '#212529' }}>
                  <img src={item.image} width="100%" height="auto" alt="" />
                  <Typography
                    sx={{
                      textAlign: 'center',
                      typography: { xs: { fontSize: '1.2rem' }, sm: { fontSize: '1.2rem' }, md: { fontSize: '1.2rem' } },
                    }}
                  >
                    {item.title}
                  </Typography>
                </Link>
              ))}
            </CateBox>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <CateBox>
              {side.map((item) => (
                <Link
                  key={Math.random()}
                  href={item.link}
                  sx={{ textDecoration: 'none', color: '#212529' }}
                  className="CateBox_ChildCate"
                >
                  <img src={item.image} width="100%" height="auto" alt="" />
                  <Typography>{item.title}</Typography>
                </Link>
              ))}
            </CateBox>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default MainPosts
