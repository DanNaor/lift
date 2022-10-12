import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import programService from "./programService";

//get program from localstorage
const program =JSON.parse(localStorage.getItem("program"))


const initialState={
    program: program ? program : null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

export const getCurrentProgram = createAsyncThunk(
    'program/getCurrentProgram',
    async(program,thunkAPI)=>{
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
        state.program = action.payload
      })
      .addCase(getCurrentProgram.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.program = null
      })
 }
})

export const {reset} = programSlice.actions
export default programSlice.reducer