import React, { useRef } from "react";
import './TodoList.css';

interface PropType {
  todolist: Todo[];
  addTodo: (str: string |  undefined) => void;
}

interface Todo {
  id: number;
  title: string | undefined;
  isFinished: boolean;
}
const TodoList: React.FC<PropType> = (props: PropType) => {
  let textInputRef = useRef<HTMLInputElement>(null);
  const getTitleHandler = event => {
    event.persist();
    event.preventDefault();
    props.addTodo(textInputRef.current?.value);
    textInputRef.current!.value = '';
  };
  return (
    <div className="TodoList">
      <input type="text" ref={textInputRef} />
      <button onClick={getTitleHandler}>Add Todo</button>
      <div className="card">
        {props.todolist.map((todo, i) => {
          return <div className="todo"  key={todo.id}>{todo.title} </div>;
        })}
      </div>
    </div>
  );
};
export default TodoList;
