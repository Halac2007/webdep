import { Input } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const Searchs = () => {
  
  }

  return (
    <div style={{ padding: 20 }}>
      <Input icon="search" placeholder="Search..." type="text" onKeyDown={handleKeyDown} />
    </div>
  )
}

export default Searchs
