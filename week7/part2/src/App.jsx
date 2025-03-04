import { useContext, useState } from "react";
import { CountContext } from "./context";

// Prop Drilling is a great way to explicitly pipe data through your UI tree to the components that use it.
function App() {
  const [count, setCount] = useState(0);

  //wrap anyoune thta want to use the teleported value inside a provider
  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count count={count} setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
}

function Count({ setCount }) {
  return (
    <div>
      {/* <CountRenderer count={count} /> */}
      {/* <Buttons count={count} setCount={setCount} /> */}
      <CountRenderer />
      <Buttons setCount={setCount} />
    </div>
  );
}

function CountRenderer() {
  const count = useContext(CountContext);
  return <div>{count}</div>;
}

function Buttons({ setCount }) {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;

// reducer/usereducer

// context api is a great way to avoid prop drilling and share data between components without having to pass props through every level of the tree.
