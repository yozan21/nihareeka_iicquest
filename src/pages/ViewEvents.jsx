import React from 'react'
import Navbar from '../components/Navbar'
import EventsList from '../components/EventsList'
import EventPost from '../components/EventPost'

function ViewEvents() {
  return (
    <div className='h-screen w-screen bg-slate-200'>
        <Navbar />
        {/* <div className="grid grid-cols-4 gap-10 w-[100vw] px-10 mt-10">
            <EventsList />
        </div> */}
        <EventPost />



    </div>
  )
}

export default ViewEvents