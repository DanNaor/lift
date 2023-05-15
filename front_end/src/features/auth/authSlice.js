import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
  // isEmailVerified: false, 
};
// export const verifyEmail = createAsyncThunk(
//   'auth/verifyEmail',
//   async () => {
//     const auth = getAuth();
//     const user = auth.currentUser;
//     if (user) {
//       await user.sendEmailVerification();
//       console.log('Verification email sent');
//     }
//   }
// );
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }) => {
    const auth = getAuth();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const token = await user.getIdToken();
      const userInfo = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        token,
      };
      console.log('User logged in:', userInfo);
      return userInfo;
    } catch (error) {
      console.log('Error logging in:', error);
      throw error; // throw the error to handle it in the reducer
    }
  }
);
export const logout = createAsyncThunk('auth/logout', async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
    console.log('User logged out');
    return null; // Return null to update the user and token values in the Redux store state
  } catch (error) {
    console.log('Error logging out:', error);
    throw error; // Return the error to handle it in the reducer
  }
});

export const initAuth = createAsyncThunk('auth/initAuth', async () => {
  const auth = getAuth();
  try {
    await auth.setPersistence(auth.Auth.Persistence.LOCAL);
    const user = auth.currentUser;

    if (user) {
      const token = await user.getIdToken();
      const userInfo = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        token,
      };
      return { userInfo, token }; 
    } else {
      return { user: null, token: null }; 
    }
  } catch (error) {
    console.log('Error initializing authentication:', error);
    return { user: null, token: null }; 
  }
});


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // email and password login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
  
      // logout
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
  
      // initAuth
      .addCase(initAuth.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(initAuth.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(initAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
  
      // // email verification
      // .addCase(verifyEmail.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(verifyEmail.fulfilled, (state) => {
      //   state.isEmailVerified = true;
      //   state.isLoading = false;
      //   state.error = null;
      // })
      // .addCase(verifyEmail.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.error.message;
      // });
  },
});

export default authSlice.reducer;

export const selectUser = (state) => state.auth.user;

export const selectToken = (state) => state.auth.token;

export const selectIsLoading = (state) => state.auth.isLoading;

export const selectError = (state) => state.auth.error;

// export const selectIsEmailVerified = (state) => state.auth.isEmailVerified;