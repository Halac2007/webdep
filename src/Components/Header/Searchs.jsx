import { Button, Input } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Searchs = () => {
  // const [data] = useState([1, 2, 3, 4, 4, 5, 6])

  // const [dataSearch, setDataSearch] =

  // const filterData = searchKey ? searchKey.filter((item) => item === +searchKey) : searchKey

  // const handleKeyDown = (e) => {
  //   if (e.key === 'Enter') {
  //     setSearchKey(e.target.value)

  //     console.log('tực thi')
  //   }
  // }

  const navigate = useNavigate()
  const [dataInput, setDataInput] = useState('11222')

  return (
    <div style={{ padding: 20 }}>
      <Input icon="search" placeholder="Search..." type="text" value={dataInput} onChange={(e) => setDataInput(e.target.value)} />
      <Button onClick={() => navigate(`/tim-kiem/${dataInput}/`)}>Click</Button>
    </div>
  )
}

export default Searchs
