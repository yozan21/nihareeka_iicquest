import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner"
function EventPost() {
  const [btnTxt, setBtnTxt] = useState("Sign in");

  const {register, handleSubmit, formState: { errors }} = useForm()
  const submitdata = data => {
    console.log(data)
    setBtnTxt(<Spinner resol={{ height: 12, width: 12 }} page={false} />);
  }

  return (
    <div>
         <div className="flex items-center justify-center">
      <form
        // action="submit/post"
        className="my-32 p-5 flex justify-center flex-col bg-white rounded-md
        basis-1/4 border-2 "
        onSubmit={handleSubmit(submitdata)}
      >
        <p className="py-3 text-gray-900 font-form-header self-center text-xl font-semibold">
          Add Events
        </p>

        <div className="basis-3/4 flex flex-col mb-5">
          <p className="font-form text-sm font-medium mb-1">Event Name</p>
          <input {...register('email')}
            type="name"
            id="name"
            className="border-2 border-slate-300 rounded-md py-2 px-4 focus:outline-none focus:border-black font-form text-md focus:transition-opacity duration-200"
            placeholder="Name of event"
            name="name"
          />
        </div>
        <div className=" flex flex-col mb-5">
          <p className="font-form text-sm font-medium mb-1">Organized </p>
          <input {...register('password')}
            type="password"
            id="password"
            className="border-2 border-slate-300 rounded-md py-2 px-4 focus:outline-none focus:border-black font-form focus:transition-opacity duration-200"
            placeholder="Enter your password"
            name="password"
          />
        </div>
        <button
          className="bg-black py-2 rounded-md mt-3 font-form text-slate-100 uppercase h-[40px]"
          onClick={handleSubmit}
        >
          {btnTxt}
        </button>
      </form>
    </div>
    </div>
  )
}

export default EventPost