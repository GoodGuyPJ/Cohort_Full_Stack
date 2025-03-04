import React, { useState } from "react";

let counter = 4;
function App() {
  const [todos, setTodos] = useState([
    {
      id: 3,
      title: "go to sleep",
      description: "at 12 pm ",
    },
    {
      id: 1,
      title: "go to gym",
      description: "at 7 pm with for Chest workout",
    },
    {
      id: 2,
      title: "go to office",
      description: "at 9:30 am ",
    },
  ]);

  function addTodo() {
    // setTodos([
    //   ...todos,
    //   {
    //     id: 4,
    //     title: Math.random(),
    //     description: Math.random(),
    //   },
    // ]);

    const newTodos = [];
    for (let i = 0; i < todos.length; i++) {
      newTodos.push(todos[i]);
    }
    newTodos.push({
      id: counter++,
      title: Math.random(),
      description: Math.random(),
    });
    setTodos(newTodos);
  }

  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}

      {/* {todos.map(function(todo) {
        return <Todo key={todo.id} title={todo.title} description={todo.description} />;
      })} */}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <h5>{description}</h5>
    </div>
  );
}

export default App;

/*
import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <HeaderWtihButton />
      <br />
      <Header title="my name is rama"></Header>
      <br />
    </>
  );
}

function HeaderWtihButton() {
  const [title, setTitle] = useState("my name is goodguypj");
  function updateTitle() {
    setTitle(`my name is ` + Math.random());
  }

  return (
    <>
      <button onClick={updateTitle}>Click me to change the title</button>
      <br />
      <br />
      <Header title={title}></Header>
    </>
  );
}

// function Header({ title }) {
//   console.log("rerender");
//   return <>{title}</>;
// }

const Header = React.memo(function Header({ title }) {
  console.log("rerender");
  return <>{title}</>;
});

export default App;
*/
