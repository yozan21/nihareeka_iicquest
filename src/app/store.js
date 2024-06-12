import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { loadingReducer } from "./loadingSlice";
import { councelerReducer } from "./councelerSlice";
import { adminReducer } from "./adminSlice";
import { normalUserReducer } from "./normalUserSlice";
import { userReducer } from "./userSlice";

const rootReducer=combineReducers({
    loading:loadingReducer,
    counceler:councelerReducer,
    admin:adminReducer,
    normalUser:normalUserReducer,
    user:userReducer
})

export const store=configureStore({
    reducer:rootReducer
})
