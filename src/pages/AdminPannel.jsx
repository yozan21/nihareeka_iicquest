import React, { useEffect,useState } from 'react'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MdOutlineBlock } from "react-icons/md";
import { normalUserDbService } from '../Appwrite Services/database/normalUser';
import { councelerDbService } from '../Appwrite Services/database/councelerDbService';
import { normalUserActions } from '../app/normalUserSlice';
import { councelerActions } from '../app/councelerSlice';
function AdminIndex() {
  const navigate=useNavigate()
  const {authStatus,accountType}=useSelector(state=>state.auth)
  useEffect(()=>{
    if(!authStatus||accountType!=='A') navigate('/')
  },[authStatus,accountType])
  const dispatch=useDispatch()
  const [value, setValue] = useState(1);
  const {normalUsers}=useSelector(state=>state.normalUser)
  const {councelers}=useSelector(state=>state.counceler)
  console.log("hello", councelers)
  const handleChange = (event)=>{
    // console.log(event.target.value)
    setValue(event.target.value)
  }
  console.log('entered')
  return (
    <div className='h-screen w-screen bg-slate-200'>
    <Navbar />
    <div className=' text-black w-full flex justify-start px-10 mt-10'>
    <select className='rounded-semi bg-white p-1' onChange={handleChange}>
      <option value="1" selected>User</option>
      <option value="2">Counsellor</option>
    </select>
    </div>

    {value == 1 ? 
    <div className='grid grid-cols-4 gap-4 px-4 my-4'>
    {normalUsers.map((user, index)=>{
      return <div className='bg-white rounded-md p-3' key={user.$id}>
            <h3 className='text-base text-blue-500 font-bold'>Name: <span className='text-black font-normal'>{user.name}</span></h3>
            <h3 className='text-base text-blue-500 font-bold'>Email: <span className='text-black font-normal'>{user.email}</span></h3>
            <div className='mt-2 flex justify-between'>
                <button
                  disabled={user.isBlocked}
                  onClick={()=>{
                    console.log('clicked')
                    const blockUser=async ()=>{
                      try {
                        const updatedNormalUser=await normalUserDbService.updateNormalUser({
                          normalUserId:user.$id,
                          ...user,
                          isBlocked:true
                        })

                        dispatch(normalUserActions.updateNormalUser({id:updatedNormalUser.$id,updatedNormalUser}))
                      } catch (error) {
                        throw error
                      }
                    }

                    blockUser()
                  }}
                >
                  <MdOutlineBlock className='text-lg text-red-500 cursor-pointer'/>
                </button>
                {user.isBlocked&&<span className='text-red-400'>Blocked</span>}
            </div>
        </div> 
    })}
        
    </div> :
    <div className='grid grid-cols-4 gap-4 px-4 my-4'>
    {councelers.map((user, index)=>{
        return <div className='bg-white rounded-md p-3' key={user.$id}>
            <h3 className='text-base text-blue-500 font-bold'>Name: <span className='text-black font-normal'>{user.name}</span></h3>
            <h3 className='text-base text-blue-500 font-bold'>Email: <span className='text-black font-normal'>{user.email}</span></h3>
            <div className='mt-2'>
              <button
              disabled={user.isBlocked}
              onClick={()=>{
                const blockUser=async ()=>{
                  try {
                    const updatedCounceler=await councelerDbService.updateCounceler({
                      councelerId:user.$id,
                      ...user,
                      isBlocked:true
                    })
                    dispatch(councelerActions.updateCounceler({id:updatedCounceler.$id,updatedCounceler}))
                  } catch (error) {
                    throw error
                  }
                }
                blockUser()
              }}
              >
                <MdOutlineBlock className='text-lg text-red-500 cursor-pointer'/>
              </button>
            </div>
        </div> 
      })}
    </div>

    }

    
    {/* <EventPost /> */}
  
    </div>
  )
}

export default AdminIndex