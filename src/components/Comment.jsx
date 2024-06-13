import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { commentDbService } from '../Appwrite Services/database/commentDbService';
import { commentActions } from '../app/commentSlice';
import { postDbService } from '../Appwrite Services/database/postDbService';
import { postActions } from '../app/postsSlice';
import { useSelector,useDispatch } from 'react-redux';
function Comments({postId}) {
    const dispatch=useDispatch()
    const {normalUsers}=useSelector(state=>state.normalUser)
    const {councelers}=useSelector(state=>state.counceler)
    const {comments:allComments}=useSelector(state=>state.comment)
    const {posts}=useSelector(state=>state.post)
    const [currPost]=posts.filter(post=>post.$id===postId)
    const {accountType,userId}=useSelector(state=>state.auth)
    const {register,handleSubmit,formState:{errors}}=useForm()
    const [comments, setComments] = useState([]);
    const [textAreaContent, setTextAreaContent] = useState('');
    const addComment =async (data) => {
        try {
          const [loggedInUser]=accountType==='U'?normalUsers.filter(normalUser=>normalUser.$id===userId):
          councelers.filter(counceler=>counceler.$id===userId)
          const newComment=await commentDbService.createComment({
            belongsTo:postId,
            posterName:loggedInUser?.name,
            content:data.comment
          })
          const updatedPost=await postDbService.updatePost({
            postId,
            ...currPost,
            comments:[...currPost.comments,newComment.$id]
          })
          dispatch(postActions.updatePost({id:updatedPost.$id,updatedPost}))
          dispatch(commentActions.addComment(newComment))
          setTextAreaContent('')
        } catch (error) {
          console.log(error)
        }
    };

    useEffect(()=>{
      setComments(
       allComments.filter(comment=>comment.belongsTo===postId)
      )
    },[allComments])
    return (
        <div className='flex items-center justify-center w-screen'>
               <div className="my-32 p-5 flex justify-center flex-col rounded-md border-2 w-full max-w-md bg-white">
                <h3 className='text-2xl font-bold mb-4'>Comments:</h3>
                <div className='grid grid-rows-1 bg-white h-[40vh] overflow-y-scroll'>
                    {comments.map(comment => (
                        <div key={comment.$id} className='bg-slate-200 mt-2 h-20 rounded p-2'>
                            <h3 className='text-blue-500 text-lg font-bold'>{comment.posterName}</h3>
                            <p className='ml-4'>{comment.content}</p>
                        </div>
                    ))}
                </div>
                <form className='mt-4' onSubmit={handleSubmit(addComment)}>
                    
                    <textarea
                        {...register('comment',{required:'This field is required'})}
                        placeholder="Comment"
                        value={textAreaContent}
                        onChange={(e)=>setTextAreaContent(e.target.value)}
                        className="p-2 border-2 rounded w-full mb-2"
                    ></textarea>
                    {errors.comment&&<p>{errors.comment.message}</p>}
                    <button type="submit" className="bg-black text-white p-2 rounded w-full">
                        Add Comment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Comments