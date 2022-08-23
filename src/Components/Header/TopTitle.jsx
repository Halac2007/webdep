import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const TopTitle = ({ headtop, headchild }) => {
  return (
    <>
      <Typography variant="h4" textAlign="center" mt="15px" pt="15px" borderBottom="2px solid #000" fontWeight="700">
        {headtop}
      </Typography>
      <Box
        textAlign="center"
        m="10px"
        borderBottom="1px solid #ddd"
        sx={{
          '& a': {
            m: '10px',
            fontSize: '0.9rem',
            color: '#444',
          },
          '& a:hover': {
            color: 'red',
          },
        }}
      ></Box>
    </>
  )
}

export default TopTitle
