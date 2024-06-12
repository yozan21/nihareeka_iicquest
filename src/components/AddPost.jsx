import React from 'react'
import { useForm } from 'react-hook-form'

function AddPost() {
    const {register, handleSubmit, formState: { errors }} = useForm()
    const submitdata = data => {
        console.log(data);
    };
  return (
    <div className='mt-10 w-full mb-10 flex flex-col justify-center items-center'>
    <form className='w-[50%]' onSubmit={handleSubmit(submitdata)}>
        <h3 className='font-medium'>Share Your Problems!!!</h3>
        <div className='w-full '>
            
            <textarea {...register('problem')} placeholder='Share your thoughts' className='w-full rounded-md p-4 h-72'></textarea>
            {errors.anonymous && <span className='block text-red-500'>*This field is required</span>}
            <input {...register('anonymous', {required:true})} id="anonymous" type="checkbox"  name="anonymous" value="1" />
            <label className='ml-2 italic' id="anonymous" htmlFor="anonymous">Add Anonymously?</label>
        </div>
            <button className='block bg-black px-2 py-1 rounded-md text-white'>Submit</button>
        </form>
    </div>
  )
}

export default AddPost