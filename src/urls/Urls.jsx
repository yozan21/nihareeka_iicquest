import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Post from '../pages/Post'
import ViewEvents from '../pages/ViewEvents'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

function Urls() {
  return (
        <Routes>
        {/* Routes for non authorized users  */}
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/add/post' element={<Post />}></Route>
        <Route path='/events' element={<ViewEvents />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        </Routes>
  )
}

export default Urls