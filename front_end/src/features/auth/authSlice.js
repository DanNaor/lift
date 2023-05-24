import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword, sendEmailVerification, setPersistence, signInWithCustomToken, signOut, onAuthStateChanged, signInWithCredential, OAuthProvider, getRedirectResult } from 'firebase/auth';
import firebase from 'firebase/app';
const initialState = {

  isLoading: false,
  error: null,
  user: {
    uid: '',
    displayName: '',
    email: '',
    photoURL: ''
  },
  token: ''
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
        token: token,
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
  try {
    const auth = getAuth();
    let user = null;

    await new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, (authUser) => {
        // console.log(user)
        user = authUser;
        unsubscribe(); // Unsubscribe once the user is obtained
        resolve(); // Resolve the Promise
      }, reject); // Reject the Promise if an error occurs
    });

    if (user) {
      const token = await user.getIdToken();
      const userInfo = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        token: token,
      };
      return userInfo;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
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
        state.token = action.payload.token;
        state.user = {
          uid: action.payload.uid,
          displayName: action.payload.displayName || '',
          email: action.payload.email || '',
          photoURL: action.payload.photoURL || ''
        };
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
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      .addCase(initAuth.fulfilled, (state, action) => {
        const userInfo = action.payload;
        console.log("userInfo-", userInfo);
        if (userInfo) {
          state.isLoading = false;
          state.token = action.payload.token;
          state.user = {
            uid: action.payload.uid,
            displayName: action.payload.displayName || '',
            email: action.payload.email || '',
            photoURL: action.payload.photoURL || ''
          };
        } else {
          state.user= {
            uid: '',
            displayName: '',
            email: '',
            photoURL: ''
          }
          state.token= ''
        }
        state.isLoading = false;
        state.error = null;
      })
      .addCase(initAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });

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

export const selectIsLoading = (state) => state.auth.isLoading;

export const selectError = (state) => state.auth.error;

// export const selectIsEmailVerified = (state) => state.auth.isEmailVerified;