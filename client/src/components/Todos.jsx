import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../store/actions/todoActions";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
const Todos = () => {
  const { todos } = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getTodos());
  }, []);
  return (
    <>
      <TodoForm />
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo?._id?.$oid} />
      ))}
    </>
  );
};

export default Todos;
