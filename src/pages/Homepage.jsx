import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Marquee from "../components/Marquee";

import { useSelector } from "react-redux";
import Post from "./Post";

function Homepage() {
  const { authStatus } = useSelector((state) => state.auth);
  const [text, setTest] = useState([
    "Believe you can and you're halfway there.",
    "Start where you are. Use what you have. Do what you can.",
    "It always seems impossible until it's done.",
    "Don't let what you cannot do interfere with what you can do.",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
  ]);
  return (
    <div className="h-full w-screen bg-slate-200">
      <Navbar />
      <Marquee text={text} />
      <div className="flex justify-center items-center gap-5 relative">
        <div className="basis-3/5 flex flex-col gap-5 ">
          <Post />
          <Post />
        </div>
        <div className="basis-1/3">counselor</div>
      </div>
    </div>
  );
}

export default Homepage;
