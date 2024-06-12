import { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner"

export default function Signup() {
  console.log('entered')
  const [btnTxt, setBtnTxt] = useState("Sign in");
  const submitdata = data => {
    setBtnTxt(<Spinner resol={{ height: 12, width: 12 }} page={false} />);
    // console.log(e.target);
  }
  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-black to-slate-800 h-full ">
      <form
        // action="submit/post"
        className="my-9 p-5 flex justify-center flex-col bg-white rounded-md
      basis-2/6 border-2 "
      >
        <p className="py-3 text-gray-900 font-form-header self-center text-xl font-semibold">
          Signup
        </p>
        <div className=" flex flex-col mb-5">
          <p className="font-form text-sm font-medium mb-1">First Name</p>
          <input
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
            type="password"
            id="password"
            className="border-2 border-slate-300 rounded-md py-2 px-4 focus:outline-none focus:border-black font-form focus:transition-opacity duration-200"
            placeholder="Enter your password"
            name="password"
          />
        </div>
        <button
          className="bg-black py-2 rounded-md mt-3 font-form text-slate-100 uppercase h-[40px]"
        >
          {btnTxt}
        </button>
      </form>
    </div>
  );
}
