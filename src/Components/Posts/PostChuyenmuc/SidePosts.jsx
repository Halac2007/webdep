import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const SidePosts = (props) => {
  return (
    <Grid item xs={12} sm={4} md={4}>
      {props.side.map((item) => (
        <Box key={Math.random()}>
          <img src={item.image} width="100%" height="200px" alt="" />
          <Box sx={{ typography: 'h4', textAlign: 'center' }}>{item.title}</Box>
        </Box>
      ))}
    </Grid>
  )
}

export default SidePosts
