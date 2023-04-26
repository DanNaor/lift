import { configureStore } from "@reduxjs/toolkit";
import programReducer from "../features/program/programSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    program: programReducer,
    auth: authReducer,
  },
});
