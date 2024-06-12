import { createSlice } from "@reduxjs/toolkit";

const initialState={
    comments:[]
}

const commentSlice=createSlice({
    name:'comment',
    initialState,
    reducers:{
        loadAllComments:(state,action)=>{
            state.comments=action.payload
        },
        addComment:(state,action)=>{
            state.comments=[...state.comments,action.payload]
        }
    }
})

export const {actions:commentActions,reducer:commentReducer}=commentSlice