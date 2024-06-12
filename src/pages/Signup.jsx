import { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner"
import { useDispatch,useSelector } from "react-redux"
import { authActions } from "../app/authSlice";
import { useNavigate } from "react-router-dom";
import { authService } from "../Appwrite Services/Authentication/authentication";
import { normalUserDbService } from "../Appwrite Services/database/normalUser";
import { userDbService } from "../Appwrite Services/database/userDbService";
import { normalUserActions } from "../app/normalUserSlice";
import { userActions } from "../app/userSlice";


export default function Signup() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [error, setError] = useState('');
  const signup = async (data) => {
    try {
      setError('')
      const accountDetails=await authService.signUp({email:data.email,password:data.password})
      if(accountDetails){
        const newNormalUser=await normalUserDbService.createNormalUser({
          email:data.email,
          password:data.password,
          name:`${data.fname} ${data.lname}`
        })
        if(newNormalUser){
          const newUser=await userDbService.createUser({accountId:accountDetails.$id,accountType:'U',userId:newNormalUser.$id})
          dispatch(userActions.addUser(newUser))
          dispatch(normalUserActions.addNormalUser(newNormalUser))
          navigate('/login')
        }
      }
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <div className='h-screen bg-slate-200'>
    <Navbar />
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit(signup)}
        // action="submit/post"
        className="my-32 p-5 flex justify-center flex-col bg-white rounded-md
        basis-1/4 border-2 "
      >
        {error&&<p className="text-xs text-red-600">{error}</p>}
        <p className="py-3 text-gray-900 font-form-header self-center text-xl font-semibold">
          Signup
        </p>
        <div className=" flex flex-col mb-5">
          <p className="font-form text-sm font-medium mb-1">First Name</p>
          <input
            {...register("fname", { required: "This field is required" })}
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
            {...register('lname')}
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
            {...register("email", { required: "This field is required" })}
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
          {...register('password', { required: "This field is required" })}
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
          {isSubmitting?(<Spinner page={false}/>):'Sign Up'}
        </button>
      </form>
    </div>
    </div>
  );
}
