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
        },
        addCounceler:(state,action)=>{
            state.councelers=action.payload
        },
        updateCounceler:(state,action)=>{
            state.councelers=state.councelers.map(counceler=>counceler.$id===action.payload.id?action.payload.updatedCounceler:counceler)
        }
    }
})

export const {actions:councelerActions,reducer:councelerReducer}=councelerSlice