import React, { useState } from "react";
import "./TodoItem.css";

export const TodoItem = (props) => {
  const { text, done, id } = props;
  const [doneTodo, setDoneTodo] = useState(done);
  const handleChangeTodo = () => {
    setDoneTodo(!doneTodo);
    props.onChangeTodo(doneTodo, id);
  };

  const handleDelete = (e) => {
    console.log("I was called: handleDelete!!! ");
    e.stopPropagation();
    props.onDelete(id);
    console.log("It suppose that this todo was deleted")
  }

  return (
    <div className={`list-group-item todo-item ${doneTodo && "done-task"}`} >
      <div className="todo-item-text">
        <input
          className="form-check-input"
          type="checkbox"
          checked={doneTodo}
          value={doneTodo}
          onChange={handleChangeTodo}
        />
        <span className={`${doneTodo && "done-todo-text"}`}>{text}</span>
      </div>
      <i className="fas fa-trash-alt delete-todo" id="delete-todo" onClick={handleDelete}></i>
    </div>
  );
};
