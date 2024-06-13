
import { MdOutlineBlock } from "react-icons/md";
export default function UserBlockCard(){
    return(
        <div className='grid grid-cols-4 gap-4 px-4 my-4'>
            <div className='bg-white rounded-md p-3'>
                <h3 className='text-base text-blue-500 font-bold'>Name: <span className='text-black font-normal'>Usmin</span></h3>
                <h3 className='text-base text-blue-500 font-bold'>Email: <span className='text-black font-normal'>usmin@gmail.com</span></h3>
                <div className='mt-2'>
                    <MdOutlineBlock className='text-lg text-red-500 cursor-pointer'/>
                </div>
            </div> 
        </div>
    )
}