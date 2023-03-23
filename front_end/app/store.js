import { configureStore } from "@reduxjs/toolkit";
import programReducer from "../features/program/programSlice"
export const store=configureStore({
    reducer:{
        program:programReducer
    },
})