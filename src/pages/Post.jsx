import React, { useState } from "react";
import { BiSolidUpvote } from "react-icons/bi";
import { FaComment } from "react-icons/fa";
import profile from "../images/logo.png";
import Comments from "./Comment";

function Post({ user }) {
  const [oCmt, setOcmt] = useState(false);
  function handleClick() {
    setOcmt((s) => !s);
    <Comments />;
  }
  return (
    <div className="bg-white flex flex-col items-center rounded shadow-lg">
      <div className="self-start pl-8 flex items-center gap-2 px-2 py-3 ">
        <img
          src={user?.image ? user.image : profile}
          alt=""
          className="h-16 w-16 rounded-full"
        />
        <h2 className="text-2xl font-mono font-semibold py-3 ">
          {user?.name ?? "User name"}
        </h2>
      </div>
      <div className="h-2/3 justify-center w-11/12 border-t border-slate-700">
        <p className="font-sans text-lg py-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
          doloribus maxime harum ea similique aliquam, hic ut itaque assumenda
          tenetur eos sint nostrum laboriosam accusamus necessitatibus velit
          blanditiis inventore a.
        </p>
      </div>
      <div className="flex justify-between w-6/12 py-15 pt-5 rounded">
        <button className="flex items-center gap-2">
          <BiSolidUpvote className="h-6 w-6 border-2 rounded border-black hover:border-red-600 hover:text-red-600" />
          <span className="text-xs text-wrap basis-14">999 Up Votes</span>
        </button>
        <button className="flex items-center gap-2" onClick={handleClick}>
          <FaComment className="h-6 w-6 border-2 rounded border-black hover:border-red-600 hover:text-red-600" />
          <span className="text-xs text-wrap basis-14">999+ comments</span>
        </button>
      </div>
    </div>
  );
}

export default Post;
