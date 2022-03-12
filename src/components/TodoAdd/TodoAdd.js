import React, { useState } from "react";
import { generateRandomString } from "../../helpers/helpers";
import "./TodoAdd.css";

export const TodoAdd = (props) => {

  const [textTodo, setTextTodo] = useState(props.text || "");
  const addTodo = (text) => {
    props.onAdd({
      text,
      done: false,
      id: generateRandomString(12),
    });
    setTextTodo("");
  };

  const handleInput = ({target}) => {
    setTextTodo(target.value);
  }

  const handleClick = () => {
    if (textTodo.length > 1) { 
      addTodo(textTodo);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      addTodo(textTodo);
    }
  };

  return (
    <div className="todo-add__container">
      <div className="form-group todo-add">
        <input
          className="form-control"
          type="text"
          placeholder="ToDo"
          value={textTodo}
          onChange={handleInput}
          onKeyUp={handleEnter}
        />
        <button onClick={handleClick} className="btn btn-primary">
          Add&nbsp;+
        </button>
      </div>
    </div>
  );
};
