import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  // define state to select a button and it goes to the id of the todo
  const [selectedId, setSelectedId] = useState(1);

  return (
    <div>
      <button
        onClick={() => {
          setSelectedId(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setSelectedId(2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setSelectedId(3);
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          setSelectedId(4);
        }}
      >
        4
      </button>
      <p>ID: {selectedId}</p>

      <Todo id={selectedId} />
    </div>
  );
}
// const [todos, setTodos] = useState([]);

// useEffect(() => {
//   axios.get("http://localhost:8000/todos").then(function (res) {
//     setTodos(res.data.todos);
//   });
// }, []);

//to show id title and description using useEffect
function Todo({ id }) {
  const [todo, setTodo] = useState({});

  // async function main() {
  //   const res = await axios.get(`http://localhost:8000/todo?id=` + id);
  //   setTodo(res.data.todo);
  // }

  //asyncuseEffect
  // useEffect(() => {
  //   main();
  // } , []);

  //Problem to solve
  //we cannot use async function in useEffect
  useEffect(() => {
    axios.get(`http://localhost:8000/todo?id=${id}`).then((res) => {
      console.log(res.data.todo);
      setTodo(res.data.todo);
    });
  }, [id]);

  //using setTimout to show the id
  useEffect(() => {
    setTimeout(() => {
      axios.get(`http://localhost:8000/todo?id=${id}`).then((res) => {
        console.log(res.data.todo);
        setTodo(res.data.todo);
      });
    }, 5000);
  }, [id]);

  return (
    <div>
      Id: {id}
      <h2>{todo.title}</h2>
      <h2>{todo.description}</h2>
    </div>
  );
}

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h2>{title}</h2>
//       <h3>{description}</h3>
//     </div>
//   );
// }

export default App;

/*  1st code 
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
   const [todos, setTodos] = useState([]);


  // useEffect(() => {
  //   axios.get("http://localhost:8000/todos").then(function (res) {
  //     setTodos(res.data.todos);
  //   });
  // }, []);


  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{description}</h3>
    </div>
  );
}

export default App;
*/

/* 2nd code 
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <div>
      <Todo id={3} />
    </div>
  );
}
// const [todos, setTodos] = useState([]);

// useEffect(() => {
//   axios.get("http://localhost:8000/todos").then(function (res) {
//     setTodos(res.data.todos);
//   });
// }, []);

//to show id title and description using useEffect
function Todo({ id }) {
  const [todo, setTodo] = useState({});

  // async function main() {
  //   const res = await axios.get(`http://localhost:8000/todo?id=` + id);
  //   setTodo(res.data.todo);
  // }

  //asyncuseEffect
  // useEffect(() => {
  //   main();
  // } , []);

  //Problem to solve
  //we cannot use async function in useEffect
  useEffect(() => {
    axios.get(`http://localhost:8000/todo?id=` + id).then((res) => {
      console.log(res.data.todo);
      setTodo(res.data.todo);
    });
  }, []);

  return (
    <div>
      <h2>{todo.title}</h2>
      <h2>{todo.description}</h2>
    </div>
  );
}

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h2>{title}</h2>
//       <h3>{description}</h3>
//     </div>
//   );
// }

export default App;
*/
