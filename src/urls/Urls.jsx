import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'

function Urls() {
  return (
        <Routes>
        
        <Route path='/' element={<Homepage />}>Home</Route>
        </Routes>
  )
}

export default Urls