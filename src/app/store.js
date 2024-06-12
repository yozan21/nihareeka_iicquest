import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { loadingReducer } from "./loadingSlice";
import { councelerReducer } from "./councelerSlice";
import { adminReducer } from "./adminSlice";
import { normalUserReducer } from "./normalUserSlice";
import { userReducer } from "./userSlice";
import { authReducer } from "./authSlice";
import { postReducer } from "./postsSlice";

const rootReducer=combineReducers({
    auth:authReducer,
    loading:loadingReducer,
    counceler:councelerReducer,
    admin:adminReducer,
    normalUser:normalUserReducer,
    user:userReducer,
    post:postReducer
})

export const store=configureStore({
    reducer:rootReducer
})
