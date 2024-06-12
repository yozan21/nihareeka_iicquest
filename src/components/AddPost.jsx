import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import uploadInsertImage from '../images/inputImage.png';
import { postDbService } from '../Appwrite Services/database/postDbService';
import { storageService } from '../Appwrite Services/Storage/storage';
import { useSelector,useDispatch } from 'react-redux';
import { postActions } from '../app/postsSlice';
import { authService } from '../Appwrite Services/Authentication/authentication';
function AddPost() {
    // const fileInputRef = useRef(null);
    const {posts}=useSelector(state=>state.post)
    console.log(posts)
    const [imagePreview, setImagePreview] = useState(uploadInsertImage);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch=useDispatch()
    const submitdata =async data => {
        let fileId=null
        if(data.image){
            const newFile=await storageService.uploadImage(data.image[0])
            if(newFile) fileId=newFile.$id
        }
        const accountDetails=await authService.getCurrentUser()
        if(accountDetails){
            const newPost=await postDbService.createPost({
                accountId:accountDetails.$id,
                date:new Date().toLocaleDateString(),
                imgId:fileId,
                content:data.problem,
                isAnonymous:data.anonymous
            })
            if(newPost){
                dispatch(postActions.addPost(newPost))
            }
        }
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
                console.log(reader.result)
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className='mt-10 w-full mb-10 flex flex-col justify-center items-center'>
            <form className='w-full max-w-lg p-6 bg-white rounded-lg shadow-md' onSubmit={handleSubmit(submitdata)}>
                <h3 className='font-medium text-2xl mb-4'>Share Your Problems!!!</h3>
                <div className='w-full mb-4'>
                    <label htmlFor="imageUpload" className='block mb-2 font-semibold'>Upload an Image</label>
                    <img 
                        src={imagePreview} 
                        onClick={handleImageClick} 
                        className='h-72 w-full  rounded-md cursor-pointer border border-dashed border-gray-400' 
                        alt="Upload"
                    />
                    <input 
                        {...register('image')}  
                        onChange={handleImageChange}
                        type="file" 
                        id="imageUpload" 
                        accept="image/*"
                        // ref={fileInputRef}
                        className=''
                    />
                </div>
                <div className='w-full mb-4'>
                    <label htmlFor="problem" className='block mb-2 font-semibold'>Your Thoughts</label>
                    <textarea 
                        {...register('problem', { required: "This field is required" })} 
                        placeholder='Share your thoughts' 
                        className='w-full rounded-md p-4 h-40 border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring'
                        id="problem"
                    ></textarea>
                    {errors.problem && <span className='block text-red-500 mt-2'>*{errors.problem.message}</span>}
                </div>
                <div className='w-full mb-4 flex items-center'>
                    <input 
                        {...register('anonymous')}
                        id="anonymous" 
                        type="checkbox"
                        className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                    />
                    <label className='ml-2 text-sm font-medium text-gray-700' htmlFor="anonymous">Add Anonymously?</label>
                </div>
                <button className='block w-full bg-black text-white font-semibold hover:font-bold py-2 rounded-md shadow-md'>Submit</button>
            </form>
        </div>
    );
}

export default AddPost;
