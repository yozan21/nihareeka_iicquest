import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { TfiThought } from "react-icons/tfi";
import { MdEventAvailable } from "react-icons/md";

function Navbar() {
  return (
    <div className="w-[100vw] bg-black h-20 flex justify-between items-center px-2">
      <div className="w-[25%] text-white font-bold text-xl">
        <NavLink to="/">Silent Strugglers</NavLink>
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
          {" "}
          <FaHome /> Home
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            backgroundColor: isActive ? "white" : "",
            color: isActive ? "black" : "white",
            borderRadius: isActive ? "10px" : " ",
          })}
          className="text-white flex justify-center items-center gap-1 p-2"
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
          className="text-white flex justify-center items-center gap-1 p-2"
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
          className="text-white flex justify-center items-center gap-1 p-2"
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
          className="text-white flex justify-center items-center gap-1 p-2"
          to="/signup"
        >
          Signup
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
