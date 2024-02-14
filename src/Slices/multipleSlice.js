import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:1
}

export const multipleSlice = createSlice({
name:'multipleSlice',
initialState,
reducers:{
    multiply:(state,action)=>{
        state.value = state.value * action.payload
    }
}
})

export const {multiply} = multipleSlice.actions

export default multipleSlice.reducer
