import React from 'react'
import Navbar from '../components/Navbar'
import AddPost from '../components/AddPost'

function AddPostPage() {
  
  return (
    <div className='h-screen w-screen bg-slate-200'>
        <Navbar />
        <AddPost />
    </div>
  )
}

export default AddPostPage