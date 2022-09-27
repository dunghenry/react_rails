import { createSlice } from "@reduxjs/toolkit";
import {
  getTodos,
  deleteTodo,
  addTodo,
  updateTodo,
} from "../actions/todoActions";
const initialState = {
  todos: [],
  loading: false,
  error: false,
  idUpdate: undefined,
  isUpdate: false,
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setIdUpdate: (state, action) => {
      state.isUpdate = action.payload.type;
      state.idUpdate = action.payload.id;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = action.payload;
    });
    builder.addCase(getTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(deleteTodo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = state.todos.filter(
        (todo) => todo?._id?.$oid !== action?.payload
      );
    });
    builder.addCase(deleteTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(addTodo.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = [...state.todos, action.payload];
    });
    builder.addCase(addTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(updateTodo.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = state.todos.map((todo) => {
        if (todo._id.$oid === action?.payload?._id?.$oid) {
          todo.title = action.payload.title;
          todo.des = action.payload.des;
          todo.completed = action?.payload?.completed;
        }
        return todo;
      });
    });
    builder.addCase(updateTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});
export const { setIdUpdate } = todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer;
