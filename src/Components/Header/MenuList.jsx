import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const MenuList = ({ menus }) => {
  return (
    <Box
      sx={{
        flexGrow: 0.6,
        display: { xs: 'flex', md: '1' },
        justifyContent: 'space-between',
        color: '#444444',
        fontWeight: 'bold',
        fontSize: 13,
        marginLeft: 1,
      }}
    >
      {menus.map((menu) => (
        <Link to={menu.url} key={menu.id} className="menu-link">
          <Typography
            className="Duy Boe"
            fontSize="1rem"
            color={'#000'}
            fontWeight="700"
            textTransform="uppercase"
            sx={{
              '&:hover': {
                bgcolor: '#333',
                color: '#fff',
              },
              padding: '5px',
              borderRadius: '5px',
              transition: 'all .3s',
            }}
          >
            {menu.title}
          </Typography>
        </Link>
      ))}
    </Box>
  )
}

export default MenuList
