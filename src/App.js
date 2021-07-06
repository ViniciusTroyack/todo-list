import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";
import Form from "./components/Form";

function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  function handleTodo(item) {
    const filteredTodo = todoList.filter((toDo) => toDo !== item);
    setTodoList([...filteredTodo]);
  }

  return (
    <div className="App">
      <div className="App-header">
        <Form addTodo={addTodo} />
        <TodoList todoList={todoList} handleTodo={handleTodo} />
      </div>
    </div>
  );
}

export default App;
