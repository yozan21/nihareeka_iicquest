import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { TfiThought } from "react-icons/tfi";
import { MdEventAvailable } from "react-icons/md";
import { useSelector,useDispatch } from "react-redux"
import { authService } from "../Appwrite Services/Authentication/authentication";
import { authActions } from "../app/authSlice";

function Navbar() {

  const dispatch=useDispatch()
  const {authStatus,accountType}=useSelector(state=>state.auth)
  return (
    <div className="w-[100vw] bg-black h-20 flex justify-between items-center px-2">
      <div className="w-[25%] text-white font-bold text-xl">
        <NavLink to="/">Silent Strugglers {authStatus && accountType ==="A" ? "/Admin" : ""} {authStatus && accountType ==="C" ? "/Counsellor" : ""} {authStatus && accountType ==="U" ? "/ User" : ""}</NavLink>
      </div>
      <div className="flex w-[28%] justify-between">
        <NavLink
          style={({ isActive }) => ({
            backgroundColor: isActive ? "white" : "",
            color: isActive ? "black" : "white",
            borderRadius: isActive ? "10px" : " ",
          })}
          className="text-white flex justify-center items-center gap-1 p-2"
          to="/"
        >
          <FaHome /> Home
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            backgroundColor: isActive ? "white" : "",
            color: isActive ? "black" : "white",
            borderRadius: isActive ? "10px" : " ",
          })}
          className={`text-white  justify-center items-center gap-1 p-2 ${authStatus && accountType !== "A" ?'flex':'hidden'}`}
          to="/add/post"
        >
          <TfiThought />
          Add Post
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            backgroundColor: isActive ? "white" : "",
            color: isActive ? "black" : "white",
            borderRadius: isActive ? "10px" : " ",
          })}
          className={`text-white  justify-center items-center gap-1 p-2 ${authStatus && accountType === 'A' ?'flex':'hidden'}`}
          to="/admin/add/counsellor"
        >
          Add Counsellor
        </NavLink>

        <NavLink
          style={({ isActive }) => ({
            backgroundColor: isActive ? "white" : "",
            color: isActive ? "black" : "white",
            borderRadius: isActive ? "10px" : " ",
          })}
          className={`text-white  justify-center items-center gap-1 p-2 ${authStatus && accountType === 'A' ?'flex':'hidden'}`}  
          to="/admin/events/manage"
        >
          <MdEventAvailable />
          Events
        </NavLink>
        
        <NavLink
          style={({ isActive }) => ({
            backgroundColor: isActive ? "white" : "",
            color: isActive ? "black" : "white",
            borderRadius: isActive ? "10px" : " ",
          })}
          className={`text-white  justify-center items-center gap-1 p-2 ${accountType !==  'A' ?'flex':'hidden'}`}
          to="/events"
          
        >
          <MdEventAvailable />
          Events
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            backgroundColor: isActive ? "white" : "",
            color: isActive ? "black" : "white",
            borderRadius: isActive ? "10px" : " ",
          })}
          className={`text-white  justify-center items-center gap-1 p-2 ${authStatus?'hidden':'flex'}`}
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            backgroundColor: isActive ? "white" : "",
            color: isActive ? "black" : "white",
            borderRadius: isActive ? "10px" : " ",
          })}
          className={`text-white  justify-center items-center gap-1 p-2 ${authStatus?'hidden':'flex'}`}
          to="/signup"
        >
          Signup
        </NavLink>
        {authStatus?(<NavLink
          onClick={()=>{
            const logOut=async ()=>{
              try {
                await authService.logOut()
                dispatch(authActions.logOut())
              } catch (error) {
                console.log(error)
              }
            }
            logOut()
          }}
          className={`text-white  justify-center items-center gap-1 p-2 flex`}
          to="/"
        >
          Log Out
        </NavLink>):(<></>)}
      </div>
    </div>
  );
}

export default Navbar;