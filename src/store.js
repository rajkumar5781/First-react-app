import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slices/counterSlice'
import multipleSlice from './Slices/multipleSlice'


export default configureStore({
  reducer: {
    counter: counterReducer,
    multiple: multipleSlice,
  }
})