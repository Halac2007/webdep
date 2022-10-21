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
      <Box>
        {searchKey.map((item) => (
          <Box key={Math.random()}>
            <img src={item.image} alt="" />
            <Typography>{item.time}</Typography>
          </Box>
        ))}
      </Box>
    </>
  )
}

export default ComponentSearch
