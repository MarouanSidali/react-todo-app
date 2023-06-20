import { useState } from "react";
import Form from './Form'
import "./styles.css";
import TodoList from "./TodoList";

const App = () => {
  
  const [todos, setTodos] = useState([]);
  
  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }
  const deleteTodo = (id) => {
    setTodos(currentTodos => {
      return currentTodos.filter((todo) => todo.id !== id )
    })
  }
  const addTodo = (title) => {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }
  return (
    <>
      <Form onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  );
};

export default App;
