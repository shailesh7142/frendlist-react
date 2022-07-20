import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
}
export const friendReducerSlice = createSlice({
  name: 'friendListSlice',
  initialState,
  reducers: {
    friendList: (state, action) => {
        console.log("...action",action,state)
        state.value += 1
    //   const obj = {
    //     id: uuid(),
    //     text: action.payload,
    //   };

    //   state.push(obj);
  },
}});

// this is for dispatch
export const { friendList } = friendReducerSlice.actions;

// this is for configureStore
export default friendReducerSlice.reducer;