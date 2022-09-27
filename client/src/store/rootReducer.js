import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
const rootReducer = combineReducers({
  todoReducer,
});

export default rootReducer;
