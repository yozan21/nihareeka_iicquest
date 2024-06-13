import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function AdminIndex() {
  const navigate=useNavigate()
  const {authStatus,accountType}=useSelector(state=>state.auth)
  useEffect(()=>{
    if(!authStatus||accountType!=='A') navigate('/')
  },[authStatus,accountType])
  console.log('entered')
  return (
    <div className='h-screen w-screen bg-slate-200'>
      <Navbar />
    </div>
  )
}

export default AdminIndex