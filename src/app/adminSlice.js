import { createSlice } from "@reduxjs/toolkit";

const initialState={
    admins:[]
}

const adminSlice=createSlice({
    name:'admin',
    initialState,
    reducers:{
        loadAllAdmins:(state,action)=>{
            state.admins=action.payload
        }
    }
})

export const {actions:adminActions,reducer:adminReducer}=adminSlice