import React from 'react'
import Navbar from '../components/Navbar'
import AddPost from '../components/AddPost'

function Post() {
  return (
    <div className='h-screen w-screen bg-slate-200'>
        <Navbar />
        <AddPost />
    </div>
  )
}

export default Post