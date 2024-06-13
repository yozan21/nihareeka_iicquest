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
        },
        updateNormalUser:(state,action)=>{
            state.normalUsers=state.normalUsers.map(normalUser=>normalUser.$id===action.payload.id?action.payload.updatedNormalUser:
                normalUser
            )
        }
    }
})

export const {actions:normalUserActions,reducer:normalUserReducer}=normalUserSlice