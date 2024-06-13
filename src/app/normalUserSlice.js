import { createSlice } from "@reduxjs/toolkit";

const initialState={
    normalUsers:[]
}

const normalUserSlice=createSlice({
    name:'normalUser',
    initialState,
    reducers:{
        loadAllNormalUsers:(state,action)=>{
            state.normalUsers=action.payload
        },
        addNormalUser:(state,action)=>{
            state.normalUsers=[...state.normalUsers,action.payload]
        }
    }
})

export const {actions:normalUserActions,reducer:normalUserReducer}=normalUserSlice