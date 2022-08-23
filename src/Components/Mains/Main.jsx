import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Services from '../../Services/Services'
import Chuyenmuc from '../Pages/Chuyenmuc'

const links = [
  { id: '1', path: '/', e: <Services /> },
  { id: '2', path: '/chuyen-muc/:name/', e: <Chuyenmuc /> },
]
const Main = () => {
  return (
    <>
      <Routes>
        {links.map((link) => (
          <Route key={link.id} path={link.path} element={link.e}></Route>
        ))}
      </Routes>
    </>
  )
}

export default Main
