import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTokenInStorage, setAuthInStorage } from "./authService";

export const getToken = createAsyncThunk('token/getToken', async () => {
  const token = await getTokenInStorage();
  return token || null;
});

const initialState = {
  token:  null
};
export const authSlice = createSlice({
  name: "tokenSlice",
  initialState,
  reducers: {
    signIn: (state, token) => {
      state.token = token.payload
      setAuthInStorage(state.token); // save token in AsyncStorage
    },
    signOut: (state) => {
      state.token=null
      clearAsyncStorage(); // clear AsyncStorage
    },
    isUserRegistered: (state) => {
      return state.token ? true : false
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getToken.fulfilled, (state, action) => {
      state.token = action.payload;
    });
  }
});

export const { signIn, signOut, isUserRegistered ,init} = authSlice.actions;


export const selectToken = (state) => state.auth.token;
export default authSlice.reducer;
