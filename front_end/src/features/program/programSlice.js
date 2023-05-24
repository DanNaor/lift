import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import programService from "./programService";

const initialState = {
  ProgramsList: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

export const getCurrentProgram = createAsyncThunk(
  'program/getCurrentProgram',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token // Get the token from the auth state
      return await programService.getCurrentProgram(token);
    } catch (error) {
      const message = (error.response &&
        error.response.data &&
        error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const programSlice = createSlice({
  name: 'programSlice',
  initialState,
  reducers: {
    // for resetting state
    reset: (state) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ''
      state.ProgramsList = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentProgram.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCurrentProgram.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        console.log("action.payload-",action.payload)
        state.ProgramsList = action.payload.practices
      })
      .addCase(getCurrentProgram.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.ProgramsList = null
      })
  }
})
export const selectProgram = (state) => state.program.ProgramsList;

export const { reset } = programSlice.actions
export default programSlice.reducer