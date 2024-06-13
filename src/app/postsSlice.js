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
        },
        updatePost:(state,action)=>{
            state.posts=state.posts.map(post=>post.$id===action.payload.id?action.payload.updatedPost:post)
        },
        addPost:(state,action)=>{
            state.posts=[...state.posts,action.payload]
        }
    }
})

export const {actions:postActions,reducer:postReducer}=postSlice