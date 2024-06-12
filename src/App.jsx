<<<<<<< HEAD
import React from "react";
import Urls from "./urls/Urls";
import Login from "./components/login";
import Signup from "./components/Signup";
import Spinner from "./components/Spinner";

=======
import { useEffect } from "react"
import Urls from "./urls/Urls"
import { useDispatch } from "react-redux"
import { adminDbService } from "./Appwrite Services/database/adminDbService"
>>>>>>> 8e3188d2 (Auth)
function App() {
  const dispatch=useDispatch()

  useEffect(()=>{
    const fetchData=async ()=>{
      const res=await adminDbService.getAllAdmins()
      console.log(res.documents) 
    }

    fetchData()
  },[])


  return (
<<<<<<< HEAD
    // <Urls />
    // <Login />
    <Signup />
    // <Spinner resol={{ height: 14, width: 14 }} />
  );
}

export default App;
=======
    <Urls/>
  )
}

export default App
>>>>>>> 8e3188d2 (Auth)
