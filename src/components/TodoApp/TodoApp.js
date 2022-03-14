import React, { useState } from "react";
import { TodoAdd } from "../TodoAdd/TodoAdd";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoList } from "../TodoList/TodoList";

export const TodoApp = () => {
  const initState = [
    { text: "Prueba 1", done: false, id: "abd1", date: "" },
    { text: "Prueba 2", done: false, id: "abd2", date: "" },
    { text: "Prueba 3", done: true, id: "abd3", date: "" },
  ];
  const getCompleted = (todos) => {
    return todos.filter((t) => !!t.done).length;
  };
  const [todos, setTodos] = useState(initState);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleOnChangeTodo = (done, id) => {
    let todoIndex = todos.findIndex((t) => t.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].done = done;
    setTodos(newTodos);
  };

  const handleOnChangeDateTodo = (date, id) => {
    let todoIndex = todos.findIndex((t) => t.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].date = date;
    setTodos(newTodos);
  }

  const handleOnDelete = (id) => {
    console.log("I try to delte the todo with Id: ", id);
    let newTodos = todos.filter((t) => t.id !== id);
    setTodos(newTodos);
  };

  const completed = getCompleted(todos)
  const total = todos.length;

  return (
    <>
      <TodoCounter completed={completed} total={total} />
      <TodoAdd onAdd={handleAddTodo} />
      <TodoList>
        {todos.map((t) => (
          <TodoItem
            key={t.id}
            {...t}
            onChangeTodo={handleOnChangeTodo}
            onDelete={handleOnDelete}
            onChangeDate={handleOnChangeDateTodo}
          />
        ))}
      </TodoList>
    </>
  );
};
