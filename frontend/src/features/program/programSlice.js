import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import programService from "./programService";

//get program from localstorage
const ProgramsList =JSON.parse(localStorage.getItem("programs"))
const initialState={
    ProgramsList: ProgramsList ? ProgramsList : null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

export const getCurrentProgram = createAsyncThunk(
    'program/getCurrentProgram',
    async(thunkAPI)=>{
        try{
            return await programService.getCurrentProgram()
        }
        catch(error){
            const message=(error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const programSlice = createSlice({
 name:'programSlice',
 initialState,
 reducers:{
    reset:(state)=>{
        state.isLoading=false
        state.isError=false
        state.isSuccess=false
        state.message=''
    }
 },
 extraReducers:(builder)=>{
    builder
      .addCase(getCurrentProgram.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCurrentProgram.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.ProgramsList = action.payload
      })
      .addCase(getCurrentProgram.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.ProgramsList = null
      })
 }
})

export const {reset} = programSlice.actions
export default programSlice.reducer