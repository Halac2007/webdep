import { Grid, Link, Typography } from '@mui/material'
import React from 'react'

const CatePost = (props) => {
  return (
    <>
      <Grid container maxWidth="lg" margin="auto">
        <Grid
          container
          item
          spacing={{
            xs: 3,
            sm: 2,
            md: 3,
          }}
        >
          {props.catepost.map((item) => (
            <Grid item xs={6} sm={4} md={3}>
              <Link key={Math.random()} href={item.link} sx={{ textDecoration: 'none', color: '#212529' }}>
                <img src={item.image} width="100%" height="auto" alt="" />
                <Typography>{item.title}</Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  )
}

export default CatePost
