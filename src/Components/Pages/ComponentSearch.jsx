import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ComponentSearch = () => {
  const [searchKey, setSearchKey] = useState([])
  const { key } = useParams()
  console.log(key)
  useEffect(() => {
    axios.get(`https://data-cafebuoisang.herokuapp.com/tim-kiem/${key}`).then((res) => {
      const data = res.data.map((item) => ({
        title: item.title,
        link: item.link,
        image: item.image.replace(/.[0-9]*x[0-9]{3}/, ''),
        imagetop: item.imageTop,
        time: item.time,
      }))
      console.log(data)
      setSearchKey(data)
    })
  }, [key])
  return (
    <>
      {/* <Box>
        {searchKey.map((item) => (
          <Box key={Math.random()}>
            <img src={item.image} alt="" />
            <Typography>{item.time}</Typography>
          </Box>
        ))}
      </Box> */}

      <Grid container maxWidth="1000px" spacing={0} margin="auto">
        <Grid
          container
          item
          spacing={{
            xs: 0,
            sm: 2,
            md: 1,
          }}
        >
          {searchKey.map((item) => (
            <Grid key={Math.random()} item xs={6} sm={6} md={3}>
              <img src={item.image} width="100%" height="auto" alt="" />
              <Typography sx={{ fontWeight: '700' }}>{item.title}</Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  )
}

export default ComponentSearch
