import { useEffect } from "react";
import Urls from "./urls/Urls";
import { authService } from "./Appwrite Services/Authentication/authentication";
import { useDispatch, useSelector } from "react-redux";
import { adminDbService } from "./Appwrite Services/database/adminDbService";
import { adminActions } from "./app/adminSlice";
import { councelerDbService } from "./Appwrite Services/database/councelerDbService";
import { councelerActions } from "./app/councelerSlice";
import { normalUserDbService } from "./Appwrite Services/database/normalUser";
import { normalUserActions } from "./app/normalUserSlice";
import { userDbService } from "./Appwrite Services/database/userDbService";
import { userActions } from "./app/userSlice";
import { authActions } from "./app/authSlice";
import { loadingActions } from "./app/loadingSlice";
import { postDbService } from "./Appwrite Services/database/postDbService";
import { postActions } from "./app/postsSlice";
import { commentDbService } from "./Appwrite Services/database/commentDbService";
import { commentActions } from "./app/commentSlice";
import { eventDbService } from "./Appwrite Services/database/eventDbService";
import { eventActions } from "./app/eventSlice";
import Comments from "./components/Comment";
function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const allAdmins = await adminDbService.getAllAdmins();
        dispatch(adminActions.loadAllAdmins(allAdmins));
        const allCouncelers = await councelerDbService.getAllCouncelers();
        dispatch(councelerActions.loadAllCounceler(allCouncelers));
        const allNormalUsers = await normalUserDbService.getAllNormalUsers();
        dispatch(normalUserActions.loadAllNormalUsers(allNormalUsers));
        const allUsers = await userDbService.getAllUsers();
        dispatch(userActions.loadAllUsers(allUsers));
        const allPosts=await postDbService.getAllPosts()
        console.log(allPosts)
        dispatch(postActions.loadAllPosts(allPosts))
        const allComments=await commentDbService.getAllComments()
        dispatch(commentActions.loadAllComments(allComments))
        const allEvents=await eventDbService.getAllEvents()
        dispatch(eventActions.loadAllEvents(allEvents))
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(loadingActions.setLoadingStatus(false));
      }
    };

    fetchData();
  }, []);

  useEffect(()=>{
    const setLogitDetails=async ()=>{
      const accountDetails=await authService.getCurrentUser()
      if(accountDetails){
        const [loggedInUser]=users.filter(user=>user.accountId===accountDetails.$id)
        if(loggedInUser) dispatch(authActions.logIn({accountType:loggedInUser.accountType,userId:loggedInUser.userId}))
      }
    }
    setLogitDetails()
  },[users])
  return (
    <Urls />
    // <Comments />
  );
}

export default App;
