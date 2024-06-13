import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Post from '../pages/Post'
import ViewEvents from '../pages/ViewEvents'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import AddPostPage from '../pages/AddPostPage'
import CommentPage from '../pages/commentPage'
import AdminIndex from '../pages/AdminPannel'
import AddCounsellor from '../pages/AddCounsellor'
function Urls() {
  return (
        <Routes>
        {/* Routes for non authorized users  */}
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/add/post' element={<AddPostPage />}></Route>
        <Route path='/events' element={<ViewEvents />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/comment/:postId' element={<CommentPage/>}/>
        <Route path='/admin/home' element={<AdminIndex/>}/>
        <Route path='/admin/add/counsellor' element={<AddCounsellor/>}/>
        </Routes>
  )
}

export default Urls