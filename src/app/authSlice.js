import { createSlice } from "@reduxjs/toolkit";

const initialState={
    authStatus:false,
    accountType:'',
    userId:''
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        logIn:(state,action)=>{
            state.authStatus=true
            state.accountType=action.payload.accountType
            state.userId=action.payload.userId
        }
    }
})

export const {actions:authActions,reducer:authReducer}=authSlice