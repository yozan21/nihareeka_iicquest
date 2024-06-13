import Comments from "../components/Comment"
import { useParams } from "react-router-dom"
export default function CommentPage(){
    const {postId}=useParams()
    console.log(postId)
    return(
        <div className="'h-screen w-screen bg-slate-200'">
            <Comments postId={postId}/>
        </div>
    )
}