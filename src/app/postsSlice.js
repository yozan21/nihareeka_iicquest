import { createSlice } from "@reduxjs/toolkit";

const initialState={
    posts:[]
}

const postSlice=createSlice({
    name:'post',
    initialState,
    reducers:{
        loadAllPosts:(state,action)=>{
            state.posts=action.payload
        }
    }
})

export const {actions:postActions,reducer:postReducer}=postSlice