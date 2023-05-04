import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import auth from "@react-native-firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import {
  setAuthInStorage,
  getAuthFromStorage,
  clearAuthData,
} from "./authService";

const REFRESH_TOKEN_THRESHOLD = 5 * 60 * 1000; // 5 minutes

const initialState = {
  user: null,
  token: null,
  refreshToken: null,
  isLoading: false,
  error: null,
};

export const loginWithGoogle = createAsyncThunk(
  "auth/loginWithGoogle",
  async () => {
    const provider = new auth.GoogleAuthProvider();
    const result = await auth().signInWithPopup(provider);
    const user = result.user;
    const token = result.credential.accessToken;
    const refreshToken = result.credential.refreshToken;
    const tokenExpiration = Date.now() + 60 * 60 * 1000; // 1 hour
    return { user, token, refreshToken ,tokenExpiration};
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await auth().signOut();
  clearAuthData();
});

export const initAuth = createAsyncThunk("auth/initAuth", async () => {
  const authData = await getAuthFromStorage();
  //first time login hence no token in asyncStorage
  if (!authData) {
    return { user: null, token: null, refreshToken: null };
  }

  const { user, token, refreshToken, tokenExpiration } = authData;

  //check if token is expired or about to expire soon 
  if (Date.now() >= tokenExpiration - REFRESH_TOKEN_THRESHOLD) {
    try {
      const newToken = await user.getIdToken(true);
      const newTokenExpiration = Date.now() + 60 * 60 * 1000; // 1 hour
      setAuthInStorage({
        user,
        token: newToken,
        refreshToken,
        tokenExpiration: newTokenExpiration,
      });
      return { user, token: newToken, refreshToken, tokenExpiration: newTokenExpiration };
    } catch (error) {
      console.log("Error refreshing token: ", error);
      clearAuthData();
      return { user: null, token: null, refreshToken: null };
    }
  }
    return { user, token, refreshToken, tokenExpiration };
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder


      //loginWithGoogle
      .addCase(loginWithGoogle.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token; // <-- store token in the state
        state.refreshToken = action.payload.refreshToken;
        state.tokenExpiration=action.payload.tokenExpiration 
        state.isLoading = false;
        state.error = null;
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      

      //logout
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.refreshToken = null;
        state.isLoading = false;
        state.tokenExpiration=null;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      
      
      //initAuth
      .addCase(initAuth.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(initAuth.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.tokenExpiration=action.payload.tokenExpiration 
        state.isLoading = false;
        state.error = null;
      })
      .addCase(initAuth.rejected, (state, action) => {
        state.isLoading =false;
        state.error = action.error.message;
        })
        },
        });
        
        export default authSlice.reducer;
        
        export const selectUser = (state) => state.auth.user;
        
        export const selectToken = (state) => state.auth.token;
        
        export const selectRefreshToken = (state) => state.auth.refreshToken;
        
        export const selectIsLoading = (state) => state.auth.isLoading;
        
        export const selectError = (state) => state.auth.error;