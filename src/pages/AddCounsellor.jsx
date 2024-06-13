import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner"
import { authService } from '../Appwrite Services/Authentication/authentication';
import { councelerDbService } from '../Appwrite Services/database/councelerDbService';
import { councelerActions } from '../app/councelerSlice';
import { userDbService } from '../Appwrite Services/database/userDbService';
import { userActions } from '../app/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function AddCounsellor() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const { register, handleSubmit, formState: { errors,isSubmitting } } = useForm();
    const submitdata =async data => {
        try {
          const acoountDetails=await authService.signUp({email:data.email,password:data.password})
          if(acoountDetails){
            const counceler=await councelerDbService.createCounceler({
              ...data,
              name:`${data.fname} ${data.lname}`
            })
            if(counceler){
              const user=await userDbService.createUser({accountId:acoountDetails.$id,accountType:'C',userId:counceler.$id})
              dispatch(councelerActions.addCounceler(counceler))
              dispatch(userActions.addUser(user))
              navigate('/login') 
            }
          }
        } catch (error) {
          throw error
        }
        
      }
  return (
    <div className='min-h-screen w-screen bg-slate-200'>
      <Navbar/>
      <div className="flex items-center justify-center">
        <form
          className="my-32 p-5 flex justify-center flex-col bg-white rounded-md
          basis-1/4 border-2 "
          onSubmit={handleSubmit(submitdata)}
        >
          <p className="py-3 text-gray-900 font-form-header self-center text-xl font-semibold">
              Add Counsellor
          </p>
          <div className=" flex flex-col mb-5">
            <p className="font-form text-sm font-medium mb-1">First Name</p>
            <input
              {...register('fname', {'required':"This field is required"})}
              type="text"
              id="fname"
              className="border-2 border-slate-300 rounded-md py-2 px-4 focus:outline-none focus:border-black font-form focus:transition-opacity duration-200"
              placeholder="Enter your first name"
              name="fname"
            />
          </div>
          <div className=" flex flex-col mb-5">
            <p className="font-form text-sm font-medium mb-1">Last Name</p>
            <input
              {...register('lname',{'required':"Enter some data in lastname"})}
              type="text"
              id="lname"
              className="border-2 border-slate-300 rounded-md py-2 px-4 focus:outline-none focus:border-black font-form focus:transition-opacity duration-200"
              placeholder="Enter your last name"
              name="lname"
            />
          </div>
          <div className="basis-3/4 flex flex-col mb-5">
            <p className="font-form text-sm font-medium mb-1">Email Address</p>
            <input
            {...register('email', {'required': "Email field is required"})}
              type="email"
              id="email"
              className="border-2 border-slate-300 rounded-md py-2 px-4 focus:outline-none focus:border-black font-form text-md focus:transition-opacity duration-200"
              placeholder="e.g. jon.doe@gmail.com"
              name="email"
            />
          </div>
          <div className=" flex flex-col mb-5">
            <p className="font-form text-sm font-medium mb-1">Password</p>
            <input
              {...register("password", {"required":"Password is required"})}
              type="password"
              id="password"
              className="border-2 border-slate-300 rounded-md py-2 px-4 focus:outline-none focus:border-black font-form focus:transition-opacity duration-200"
              placeholder="Enter your password"
              name="password"
            />
          </div>
          <button
            className="bg-black py-2 rounded-md mt-3 font-form text-slate-100 uppercase h-[40px]"
            type='submit'
          >
            {isSubmitting?(<Spinner page={false}/>):('Sign in')}
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddCounsellor