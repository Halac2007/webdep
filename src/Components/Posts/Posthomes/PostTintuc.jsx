import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const PostTintuc = (props) => {
  return (
    <>
      <Grid container maxWidth="1200px" paddingTop="0px" spacing={2} margin="auto" className="box-tintuc">
        <Grid container item xs={12} sm={12} md={12}>
          <Typography
            sx={{
              textAlign: 'center',
              color: '#333333',

              textTransform: 'uppercase',
              typography: {
                xs: {
                  fontSize: '1.5rem',
                  paddingLeft: '18vh',
                },
                sm: {
                  paddingTop: '2vh',
                  paddingLeft: '40vh',
                  fontSize: '2rem',
                },
                md: {
                  paddingTop: '2vh',
                  fontSize: '3rem',
                  paddingLeft: '50vh',
                },
              },
            }}
          >
            Tin tức
          </Typography>
        </Grid>

        {props.listchil.map((item) => (
          <Grid key={Math.random()} item xs={12} sm={3} md={3} className="box-tinnoibat">
            <Box sx={{ padding: '0px 8px' }}>
              <img src={item.image} width="100%" height="auto" alt="" />
              <Box>{item.title}</Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default PostTintuc
