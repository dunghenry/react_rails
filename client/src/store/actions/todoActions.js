import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getTodos = createAsyncThunk("todo/getTodos", async () => {
  try {
    const response = await axios.get("todos");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (id) => {
  try {
    await axios.delete(`todos/${id}`);
    return id;
  } catch (error) {
    console.log(error);
  }
});

export const addTodo = createAsyncThunk("todo/addTodo", async (todo) => {
  try {
    const response = await axios.post("todos", todo);
    return response.data;
    // return todo;
  } catch (error) {
    console.log(error);
  }
});
export const updateTodo = createAsyncThunk(
  "todo/updateTodo",
  async ({ idUpdate, todo }) => {
    try {
      const response = await axios.put(`todos/${idUpdate}`, todo);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
