import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Marquee from '../components/Marquee'

function Homepage() {
  const [text, setTest] = useState(["Believe you can and you're halfway there.", "Start where you are. Use what you have. Do what you can.", "It always seems impossible until it's done."])
  let x = (Math.random());
  console.log(x)
  return (
    <div className='h-screen w-screen bg-slate-200'>
    <Navbar />
    <Marquee text={"hello"}/>
    </div>
  )
}

export default Homepage