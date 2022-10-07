import { Input } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const Searchs = () => {
  const [data] = useState([1, 2, 3, 4, 4, 5, 6])
  const [searchKey, setSearchKey] = useState('')

  const filterData = searchKey ? data.filter((item) => item === +searchKey) : data

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setSearchKey(e.target.value)

      console.log('tực thi')
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <Input icon="search" placeholder="Search..." type="text" onKeyDown={handleKeyDown} />
    </div>
  )
}

export default Searchs
