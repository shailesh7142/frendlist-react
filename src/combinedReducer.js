import { combineReducers } from "redux";
import friendReducerSlice from './friendReducerSlice'

export default combineReducers({
    friendReducer:friendReducerSlice
})