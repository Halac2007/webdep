import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

const CustomerHome = ({ siderhome }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }
  return (
    <Slider {...settings}>
      {siderhome.map((item) => (
        <Link key={Math.random()} href={item.url} sx={{ textDecoration: 'none', color: '#212529' }} className="box-slider">
          <Box sx={{ margin: '0px 10px' }}>
            <img src={item.image} width="100%" height="auto" alt="" />
            <Typography>{item.title}</Typography>
          </Box>
        </Link>
      ))}
    </Slider>
  )
}

export default CustomerHome
