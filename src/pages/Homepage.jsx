import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Marquee from '../components/Marquee'
import { useSelector,useDispatch } from "react-redux"
import { authService } from '../Appwrite Services/Authentication/authentication'
import { authActions } from '../app/authSlice'
import Spinner from '../components/Spinner'
function Homepage() {
  const dispatch=useDispatch()
  const {authStatus}=useSelector(state=>state.auth)
  const {isAppLoading}=useSelector(state=>state.loading)
  const [text, setTest] = useState(["Believe you can and you're halfway there.", "Start where you are. Use what you have. Do what you can.", "It always seems impossible until it's done.", "Don't let what you cannot do interfere with what you can do.", "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."])
  return (
    <div className='h-screen w-screen bg-slate-200'>
    <Navbar />
    {
      isAppLoading?(
        <Spinner page={true}/>
      ):(
        <>
          <Marquee text={text}/>
          {
            authStatus?(<p>logged in</p>):(<p>logged out</p>)
          }
        </>
      )
    }
   
    </div>
  )
}

export default Homepage