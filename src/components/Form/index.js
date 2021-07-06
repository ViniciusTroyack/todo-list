

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

.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
