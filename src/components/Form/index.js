import { useState } from "react";

function Form({ addTodo }) {
  const [userInput, setUserInput] = useState("");

  return (
    <form>
      <input
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <button type="button" onClick={() => addTodo(userInput)}>
        Adicionar Tarefa
      </button>
    </form>
  );
}

export default Form;
