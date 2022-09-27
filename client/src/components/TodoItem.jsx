import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../store/actions/todoActions";
import { setIdUpdate } from "../store/slices/todoSlice";
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleUpdate = (id) => {
    dispatch(setIdUpdate({ id: id, type: true }));
  };
  return (
    <>
      <div>
        <h1>{todo.title}</h1>
        <p>{todo.des}</p>
        <div>
          <button onClick={() => handleUpdate(todo?._id?.$oid)}>Update</button>
          &nbsp;&nbsp;
          <button onClick={() => handleDelete(todo?._id?.$oid)}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
