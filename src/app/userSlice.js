import { createSlice } from "@reduxjs/toolkit";

const initialState={
    users:[]
}

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        loadAllUsers:(state,action)=>{
            state.users=action.payload
        },
        addUser:(state,action)=>{
            state.users=[...state.users,action.payload]
        }
    }
})

export const {actions:userActions,reducer:userReducer}=userSlice