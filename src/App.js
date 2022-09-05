import './App.css';
import { useState } from "react";

const App = () => {
  const [inputs, setInputs] = useState({ text: "", completed: false });
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("ALL");

  const handleChange = (e) => {
    setInputs({ ...inputs, text: e.target.value });
  };
  const handleAdd = () => {
    setTodos([...todos, inputs]);
    setInputs({ ...inputs, text: "" });
  };
  const handleTodo = (event, i) => {
    setTodos(
      todos.map((todo, k) =>
        i === k ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const updateFilter = (filterStatus) => {
    setFilter(filterStatus);
  };

  const todosFilter = () => {
    if (filter === "ALL") {
      return todos;
    } else if (filter === "ACTIVE") {
      return todos.filter((todo) => !todo.completed);
    } else if (filter === "COMPLETED") {
      return todos.filter((todo) => todo.completed);
    }
    return todos;
  };

  return (
    <div>
      <input type="text" value={inputs.text} onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
      {todosFilter().map((todo, i) => (
        <div key={i}>
          <input type="checkbox" onChange={(event) => handleTodo(event, i)} />
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "" }}
          >
            {todo.text}
          </span>
        </div>
      ))}
      <button onClick={() => updateFilter("ALL")}>ALL</button>
      <button onClick={() => updateFilter("ACTIVE")}>ACTIVE</button>
      <button onClick={() => updateFilter("COMPLETED")}>COMPLETED</button>
    </div>
  );
};
export default App;

