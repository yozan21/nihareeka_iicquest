import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isAppLoading:true
}

const loadingSlice=createSlice({
    name:'loading',
    initialState,
    reducers:{
        setLoadingStatus:(state,action)=>{
            state.isAppLoading=action.payload
        }
    }
})

export const {actions:loadingActions,reducer:loadingReducer}=loadingSlice