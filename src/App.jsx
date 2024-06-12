import { useEffect } from "react"
import Urls from "./urls/Urls"
import { useDispatch } from "react-redux"
import { adminDbService } from "./Appwrite Services/database/adminDbService"
import { adminActions } from "./app/adminSlice"
import { councelerDbService } from "./Appwrite Services/database/councelerDbService"
import { councelerActions } from "./app/councelerSlice"
import { normalUserDbService } from "./Appwrite Services/database/normalUser"
import { normalUserActions } from "./app/normalUserSlice"
import { userDbService } from "./Appwrite Services/database/userDbService"
import { userActions } from "./app/userSlice"
function App() {
  const dispatch=useDispatch()

  useEffect(()=>{
    const fetchData=async ()=>{
      try {
        const allAdmins=await adminDbService.getAllAdmins()
        dispatch(adminActions.loadAllAdmins(allAdmins))
        const allCouncelers=await councelerDbService.getAllCouncelers()
        dispatch(councelerActions.loadAllCounceler(allCouncelers))
        const allNormalUsers=await normalUserDbService.getAllNormalUsers()
        dispatch(normalUserActions.loadAllNormalUsers(allNormalUsers))
        const allUsers=await userDbService.getAllUsers()
        dispatch(userActions.loadAllUsers(allUsers))
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  },[])


  return (
    <Urls/>
  )
}

export default App
