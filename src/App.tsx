import React, { useState } from "react";
import "./styles.css";
import TodoList from "./Components/TodoList";

interface Todo {
  id: number;
  title: string | undefined;
  isFinished: boolean;
}

export default function App() {
  const todos: Todo[] = [
    { id: 1, title: "Grocery", isFinished: false },
    { id: 2, title: "Store", isFinished: true }
  ];
  const [newTodo, setTodo] = useState(todos);
  const addNewTodsHandler = (todo: string | undefined) => {
    console.log("new todo--->", todo);
    const newTitle = { id: Math.random(), title: todo, isFinished: false };
    // todos.push(newTitle);
    console.log("new state --->", newTodo);
    setTodo(prevTodo => [...prevTodo, newTitle]);
    console.log("old state --->", todos);
  };

  return (
    <div className="App">
      <TodoList todolist={newTodo} addTodo={addNewTodsHandler} />
    </div>
  );
}
