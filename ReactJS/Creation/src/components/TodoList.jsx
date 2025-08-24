import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal.trim()) {
      setTodos([...todos, inputVal]);
      setInputVal("");
    }
  };

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <div>
      <h1>Todo lists</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputVal}
          onChange={handleChange}
          placeholder="Add new Todo"
        ></input>

        <button>Add Todo</button>

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default TodoList;
