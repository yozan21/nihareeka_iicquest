import { createSlice } from "@reduxjs/toolkit";

const initialState={
    events:[]
}

const eventSlice=createSlice({
    name:'event',
    initialState,
    reducers:{
        loadAllEvents:(state,action)=>{
            state.events=action.payload
        },
        addEvent:(state,action)=>{
            state.events=[...state.events,action.payload]
        }
    }
})

export const {actions:eventActions,reducer:eventReducer}=eventSlice