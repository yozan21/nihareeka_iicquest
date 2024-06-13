import React from "react";
import { useSelector } from "react-redux";
import { storageService } from "../Appwrite Services/Storage/storage";
function EventsList() {
  const {events}=useSelector(state=>state.event)
  console.log(events)
  return (
    events.map(event=>
    <div className="rounded-md relative flex pt-10 bg-white pb-10" key={event.$id}>
      <div className="w-[20%] relative left-[-5%]">
        <img src={event.imgId?storageService.getFilePreview(event.imgId):''} alt=""  className="w-full"/>
      </div>
      <div className="ml-10">
        <h3 className="text-blue-500 font-bold">
          Event Name:
        </h3>
        <span className="text-black font-medium">{event.name}</span>
        <h3 className="text-blue-500 font-bold">
          Organized by:
        </h3>
        <span className="text-black font-medium">{event.organizer}</span>

        <h3 className="text-blue-500 font-bold">
          Location:
        </h3>
        <span className="text-black font-medium">{event.address}</span>

      </div>
    </div>
    )
  );
}

export default EventsList;
