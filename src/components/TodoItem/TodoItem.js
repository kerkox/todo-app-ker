import React from "react";
import "./TodoItem.css";

export const TodoItem = ({
  text,
  done,
  id,
  date,
  onChangeTodo,
  onDelete,
  onChangeDate,
}) => {
  const handleChangeTodo = () => {
    onChangeTodo(!done, id);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(id);
  };

  const handleChangeDate = ({ target }) => {
    let newDate = target.value;
    console.log("%cdate", "font-size:18px;color:orange", newDate);
    onChangeDate(newDate, id);
  };

  return (
    <div className={`list-group-item todo-item ${done && "done-task"}`}>
      <div className="todo-item-text">
        <input
          className="form-check-input"
          type="checkbox"
          checked={done}
          value={done}
          onChange={handleChangeTodo}
        />
        <span className={`${done && "done-todo-text"}`}>{text}</span>
      </div>
      <div className="options-todo-item">
        <input
          type="date"
          name="fecha"
          className="form-control"
          onChange={handleChangeDate}
          value={date}
        />
        <i
          className="fas fa-trash-alt delete-todo"
          id="delete-todo"
          onClick={handleDelete}
        ></i>
      </div>
    </div>
  );
};
