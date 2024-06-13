import EventPost from "../components/EventPost";
import Navbar from "../components/Navbar";
export default function EventPostPage(){
    return(
        <div className="h-screen w-screen bg-slate-200">
            <Navbar/>
            <EventPost/>
        </div>
    )
}