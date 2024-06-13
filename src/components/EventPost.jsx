import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner"
import uploadInsertImage from '../images/inputImage.png';
import { eventDbService } from '../Appwrite Services/database/eventDbService';
import { eventActions } from '../app/eventSlice';
import { councelerDbService } from '../Appwrite Services/database/councelerDbService';
import { councelerActions } from '../app/councelerSlice';
import { useSelector,useDispatch } from 'react-redux';
import { storageService } from '../Appwrite Services/Storage/storage';
function EventPost() {
  const dispatch=useDispatch()
  const { userId,accountType } = useSelector(state => state.auth)
  const { councelers } = useSelector(state => state.counceler)
  const {normalUsers}=useSelector(state=>state.normalUser)
  const [currentCounceler] = councelers.filter(counceler => counceler.$id === userId)
  const [imagePreview, setImagePreview] = useState(uploadInsertImage);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()
  const [currentUser]=accountType==='U'?normalUsers.filter(normalUser=>normalUser.$id===userId):
    councelers.filter(counceler=>counceler.$id===userId)
  console.log(councelers)
  const submitdata = async data => {
    try {
      if(!currentUser.isBlocked){
        let fileId = null
        if (data.image.length) {
          const newFile = await storageService.uploadImage(data.image[0])
          if (newFile) fileId = newFile.$id
        }
        const newEvent = await eventDbService.createEvent({
          name:data.name,
          organizer: data.organized,
          address: data.location,
          imgId:fileId
        })
        if(newEvent){
          console.log('curr counceler',currentCounceler)
          const updatedCounceler=await councelerDbService.updateCounceler({
            councelerId:currentCounceler.$id,
            ...currentCounceler,
            events:[...currentCounceler.events,newEvent.$id]
          })
          if(updatedCounceler){
            dispatch(eventActions.addEvent(newEvent))
            dispatch(councelerActions.updateCounceler({id:updatedCounceler.$id,updatedCounceler}))
          }
        }
      } else alert('you are blocked')
    } catch (error) {
      console.log(error)
    }
  }
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
    <div>
      <div className="flex items-center justify-center">
        <form
          // action="submit/post"
          className="my-32 p-5 flex justify-center flex-col bg-white rounded-md
        basis-1/4 border-2 "
          onSubmit={handleSubmit(submitdata)}
        >
          <p className="py-3 text-gray-900 font-form-header self-center text-xl font-semibold">
            Add Events
          </p>

          <div className="basis-3/4 flex flex-col mb-5">
            <p className="font-form text-sm font-medium mb-1">Add Image</p>
            <img
              src={imagePreview}

              className='h-72 w-full  rounded-md cursor-pointer border border-dashed border-gray-400'
              alt="Upload" />
            <input
              {...register('image')}
              onChange={handleImageChange}
              type="file"
              id="imageUpload"
              accept="image/*"
              // ref={fileInputRef}
              className=''
            />

            <p className="font-form text-sm font-medium mb-1">Event Name</p>
            <input {...register('name')}
              type="name"
              id="name"
              className="border-2 border-slate-300 rounded-md py-2 px-4 focus:outline-none focus:border-black font-form text-md focus:transition-opacity duration-200"
              placeholder="Name of event"
              name="name"
            />
          </div>
          <div className=" flex flex-col mb-5">
            <p className="font-form text-sm font-medium mb-1">Organized by </p>
            <input {...register('organized')}
              type="type"
              id="organized"
              className="border-2 border-slate-300 rounded-md py-2 px-4 focus:outline-none focus:border-black font-form focus:transition-opacity duration-200"
              placeholder="organized by..."
              name="organized"
            />
          </div>
          <div className=" flex flex-col mb-5">
            <p className="font-form text-sm font-medium mb-1">Location </p>
            <input {...register('location')}
              type="type"
              id="location"
              className="border-2 border-slate-300 rounded-md py-2 px-4 focus:outline-none focus:border-black font-form focus:transition-opacity duration-200"
              placeholder="Enter the location"
              name="location"
            />
          </div>
          <button
            className="bg-black py-2 rounded-md mt-3 font-form text-slate-100 uppercase h-[40px]"
            type='submit'
          >
            {isSubmitting ? <Spinner page={false} /> : 'Add'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default EventPost