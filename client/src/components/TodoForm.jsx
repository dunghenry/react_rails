import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../store/actions/todoActions";
import { setIdUpdate } from "../store/slices/todoSlice";
const TodoForm = () => {
  const { todos, idUpdate, isUpdate } = useSelector(
    (state) => state.todoReducer
  );
  const [title, setTitle] = React.useState("");
  const [des, setDes] = React.useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      title: des,
    };
    dispatch(addTodo(todo));
    setTitle("");
    setDes("");
  };
  React.useEffect(() => {
    if (idUpdate) {
      const todo = todos.find((todo) => todo._id.$oid === idUpdate);
      setTitle(todo?.title);
      setDes(todo?.des);
    }
  }, [idUpdate]);
  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    const todo = {
      title,
      des,
    };
    dispatch(updateTodo({ idUpdate, todo }));
    dispatch(setIdUpdate({ id: null, type: false }));
    setTitle("");
    setDes("");
  };
  return (
    <>
      <form onSubmit={isUpdate ? handleSubmitUpdate : handleSubmit}>
        <div>
          <label>Title : </label>
          <input
            type="text"
            placeholder="Enter title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <br></br>
        <div>
          <label>Des : </label>
          <input
            type="text"
            placeholder="Enter des..."
            value={des}
            onChange={(e) => setDes(e.target.value)}
          />
        </div>
        <br></br>
        <div>
          {isUpdate ? <button>Update</button> : <button>Add todo</button>}
        </div>
      </form>
    </>
  );
};

export default TodoForm;
