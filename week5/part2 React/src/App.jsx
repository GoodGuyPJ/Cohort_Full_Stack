import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to the market",
      description: "Buy some fruits",
      completed: false,
    },
    {
      title: "Go to the gym",
      description: "Do some exercise",
      completed: true,
    },
  ]);

  // const [todos, setTodos] = useState([]);
  // function addTodo() {
  //   let newTodos = [];
  //   for (let i = 0; i < todos.length; i++) {
  //     newTodos.push(todos[i]);
  //   }
  //   newTodos.push({
  //     title: "New todo",
  //     description: "New description",
  //     completed: false,
  //   });
  // }

  function addTodo() {
    setTodos([
      ...todos,
      {
        title: "New todo",
        description: "New description",
        completed: false,
      },
    ]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {/* <Todo title={todos[0].title} description={todos[0].description} /> */}

      {todos.map(function (todo, index) {
        return (
          <Todo key={index} title={todo.title} description={todo.description} />
        );
      })}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1> {props.title} </h1>
      <h3> {props.description} </h3>
    </div>
  );
}

export default App;

/*

import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CustomButton count={count} setCount={setCount} />
    </div>
  );
}

function CustomButton(props) {
  function onClickHandler() {
    props.setCount(props.count + 1);
  }

  return <button onClick={onClickHandler}>Counter {props.count} </button>;
}

export default App;



*/
