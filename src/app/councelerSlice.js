import { createSlice } from "@reduxjs/toolkit";

const initialState={
    councelers:[]
}

const councelerSlice=createSlice({
    name:'counceler',
    initialState,
    reducers:{
        loadAllCounceler:(state,action)=>{
            state.councelers=action.payload
        }
    }
})

export const {actions:councelerActions,reducer:councelerReducer}=councelerSlice