import { Box, Link, Typography } from '@mui/material'
import Slider from 'react-slick'

const CustomerSlider = ({ posts }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
      {posts.map((item) => (
        <Link key={Math.random()} href={item.url} sx={{ textDecoration: 'none', color: '#212529' }}>
          <Box sx={{ margin: '0px 10px' }}>
            <img src={item.image} width="100%" height="auto" alt="" />
            <Typography>{item.title}</Typography>
          </Box>
        </Link>
      ))}
    </Slider>
  )
}

export default CustomerSlider
