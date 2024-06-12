import { useState } from "react";

export default function login() {
  const [btnTxt, setBtnTxt] = useState("Sign in");

  function handleSubmit(e) {
    e.preventDefault();
    setBtnTxt(<Spinner resol={{ height: 12, width: 12 }} page={false} />);
  }
  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-black to-slate-800 h-full ">
      <form
        // action="submit/post"
        className="my-32 p-5 flex justify-center flex-col bg-white rounded-md
        basis-1/4 border-2 "
        onSubmit={handleSubmit}
      >
        <p className="py-3 text-gray-900 font-form-header self-center text-xl font-semibold">
          Login
        </p>

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
          onClick={handleSubmit}
        >
          {btnTxt}
        </button>
      </form>
    </div>
  );
}
