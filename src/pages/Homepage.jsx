import React, { useState,useEffect } from "react";
import Navbar from "../components/Navbar";
import Marquee from "../components/Marquee";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Post from "./Post";
import Spinner from "../components/Spinner";

function Homepage() {
  const navigate=useNavigate()
  const {isAppLoading}=useSelector(state=>state.loading)
  const { authStatus,accountType } = useSelector((state) => state.auth);
  const [text, setTest] = useState([
    "Believe you can and you're halfway there.",
    "Start where you are. Use what you have. Do what you can.",
    "It always seems impossible until it's done.",
    "Don't let what you cannot do interfere with what you can do.",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
  ]);
  const {posts}=useSelector(state=>state.post)
  console.log(posts)
  useEffect(()=>{
    if(authStatus&&accountType==='A') navigate('/admin/home')
  },[authStatus,accountType])
  return (
    <div className="min-h-screen w-screen bg-slate-200">
      <Navbar />
      <Marquee text={text} />
      <div className="flex justify-center items-center gap-5 relative">
        {
          isAppLoading?(
            <Spinner page={true}/>
          ):(
          <div className="basis-3/5 flex flex-col gap-5 ">
            {
              posts.length?(
                posts.map(post=>
                  <Post key={post.$id} post={post}/>
                )
              ):(
                <p>You dont have any posts</p>
              )
            }
          </div>
          )
        }
      </div>
    </div>
  );
}

export default Homepage;
