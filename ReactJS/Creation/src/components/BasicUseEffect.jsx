import React, { useEffect, useState } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h1>count: {count} </h1>
      <button onClick={() => setCount(count + 1)}>+ - Increment</button>
    </div>
  );
};

const BasicUseEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData(params) {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");

      const data = await res.json();
      if (data && data.length) setData(data);
    }
    getData();
  }, []);

  return (
    <div>
      <h1>useEffect</h1>
      {data.map((todo) => (
        <section key={todo.id}>
          <li>{todo.title}</li>
          <li>{todo.body}</li>
        </section>
      ))}

      <CounterEffect />
    </div>
  );
};

export default BasicUseEffect;
