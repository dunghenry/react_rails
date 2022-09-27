import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos:[]
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

const todoReducer = todoSlice.reducer;
export default todoReducer;
