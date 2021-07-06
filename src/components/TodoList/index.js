function TodoList({ todoList, handleTodo }) {
  return (
    <ul>
      {todoList.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => handleTodo(item)}>Finalizar Tarefa</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
