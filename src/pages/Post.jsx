import React, { useState } from "react";
import { BiSolidUpvote } from "react-icons/bi";
import { FaComment } from "react-icons/fa";
import profile from "../images/logo.png";
import Comments from "../components/Comment";
import { storageService } from "../Appwrite Services/Storage/storage";
import { useSelector,useDispatch } from "react-redux";
import { postDbService } from "../Appwrite Services/database/postDbService";
import { postActions } from "../app/postsSlice";
import { useNavigate } from "react-router-dom";
function Post({ post }) {
  const navigate=useNavigate()
  const {authStatus,userId}=useSelector(state=>state.auth)
  const dispatch=useDispatch()
  const {users}=useSelector(state=>state.user)
  const {normalUsers}=useSelector(state=>state.normalUser)
  const {councelers}=useSelector(state=>state.counceler)
  const [posterDetails]=users.filter(user=>user.accountId===post?.accountId)
  const [poster]=posterDetails.accountType==='U'?normalUsers.filter(normalUser=>normalUser.$id===posterDetails.userId):
  councelers.filter(counceler=>counceler.$id===posterDetails.userId)
  const [oCmt, setOcmt] = useState(false);
  function handleClick() {
    navigate(`/comment/${post.$id}`)
  }
  return (
    <div className="bg-white flex flex-col items-center rounded shadow-lg transition-all py-1" >
      <div className="self-start pl-8 flex items-center gap-2 px-2 py-3 ">
        <h2 className="text-2xl font-mono font-semibold py-3 ">
          {poster?.name ?? "User name"}
        </h2>
      </div>
      <div className="h-2/3 justify-center w-11/12 border-t border-slate-700">
        <p className="font-sans text-lg py-5">
          {post.content}
        </p>
        {post.imgId? (<img  src={storageService.getFilePreview(post.imgId)} className=""/>):''}
      </div>
      <div className="flex justify-between w-6/12 py-15 pt-5 rounded">
        <button className="flex items-center gap-2"
        disabled={!authStatus}
        onClick={()=>{
          const likePost=async ()=>{
            try {
              if(!post.likes.includes(userId)){
                const updatedPost=await postDbService.updatePost({
                  postId:post.$id,
                  ...post,
                  likes:[...post.likes,userId]
                })
                dispatch(postActions.updatePost({id:updatedPost.$id,updatedPost}))
              }
              else{
                const updatedPost=await postDbService.updatePost({
                  postId:post.$id,
                  ...post,
                  likes:post.likes.filter(likersId=>likersId!==userId)
                })
                dispatch(postActions.updatePost({id:updatedPost.$id,updatedPost}))
              }
            } catch (error) {
              throw error
            }
          }
          likePost()
        }}
        >
          <BiSolidUpvote className="h-6 w-6 border-2 rounded border-black hover:border-red-600 hover:text-red-600" />
          <span className="text-xs text-wrap basis-14">{post.likes.length} upvotes</span>
        </button>
        <button className="flex items-center gap-2" disabled={!authStatus} onClick={handleClick}>
          <FaComment className="h-6 w-12 text-xl border-2 rounded border-black hover:border-red-600 hover:text-red-600" />
          <span className="text-xs text-wrap basis-14">{post.comments.length}</span>
        </button>
      </div>
    </div>
  );
}

export default Post;
