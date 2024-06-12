import React from 'react';
import "../css/Marquee.css";

const Marquee = ({ text }) => {

    return (
         <div className="marquee-container font-semibold mt-2 mb-2">
            <div className="marquee">
            {text.map((quotes, index)=>{
               return <span className='text-red-500 w-[25vw]' key={index}>!! <span className='text-black'>{quotes}</span> !!</span>
            })} 
            </div>
        </div>
    );
};

export default Marquee;