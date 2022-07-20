import { configureStore } from '@reduxjs/toolkit';
import combineReducers from './combinedReducer';




const store = configureStore({
  reducer: combineReducers
})

export default store