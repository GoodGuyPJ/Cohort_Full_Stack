// import { Greet } from "./components/Greet";
import "./index.css";

import Greet from "./components/Greet";
import UserList from "./components/UserList";
import Props from "./components/Props";
import ConditionStatments from "./ConditionStatments";

// React icons
import { ImAmazon } from "react-icons/im";
import { ImBrightnessContrast } from "react-icons/im";
import { ImCool } from "react-icons/im";
import { FaBeerMugEmpty } from "react-icons/fa6";
import LearnUseState from "./components/LearnUseState";
import ComponentOneUseState from "./components/ComponentOneUseState";
import { createContext, useReducer, useState } from "react";
import ArrowFunUseState from "./components/ArrowFunUseState";
import TodoList from "./components/TodoList";
import CopyInputPortal from "./components/CopyInputPortal";
import BasicUseEffect from "./components/BasicUseEffect";
import PropDrillingA from "./components/PropDrillingA";
import UseContextHook from "./components/UseContextHook";
import { UserContextEx } from "./components/UserContextEx";
import UserProfileUpdateUserContextEx from "./components/UserProfileUpdateUserContextEx";
import UseReducerHook from "./components/UseReducerHook";
import UseRefHook from "./components/UseRefHook";
import UseFetch from "./components/UseFetch";

// export const Data = createContext();

export const ProductData = createContext();

const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };

    case "incrementByAmount":
      return { ...state, count: state.count + action.payload };

    case "reduceByAmount":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

function App() {
  const [count, setCount] = useState(0);

  const [inputValue, setInputValue] = useState(0);

  const name = "PKJ"; //-> context API

  const productData = {
    id: "1",
    name: "Blue Shirt",
    brand: "Jack and Jones",
    size: "S/M/XL",
  };

  // useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  //useFectch
  const [data] = UseFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <section className="root">
      {/* <Greet /> */}
      {/* <UserList /> */}
      {/* <Props /> */}
      {/* <ConditionStatments isValid={true} /> */}
      {/* <h1
        style={{
          color: "red",
          backgroundColor: "Blue",
          padding: "20px",
          width: "50%",
          justifyContent: "center",
          display: "flex",
        }}
      >
        Inline styles
      </h1> */}
      {/* React Icons */}
      {/* <h3>React Icons: Examples</h3>
      <div style={{ fontSize: "100px", padding: "20px" }}>
        <ImAmazon style={{ fontSize: "100px", padding: "20px" }} />
        <ImBrightnessContrast style={{ fontSize: "100px", padding: "20px" }} />
        <ImCool style={{ fontSize: "100px", padding: "20px" }} />
      </div>

      <div>
        <h2>
          Chears:
          <p style={{ fontSize: "150px", color: "brown" }}>
            <FaBeerMugEmpty onClick={() => alert("chears boys")} />
          </p>
        </h2>
      </div> */}
      {/* Time: 1:47 */}
      {/* <LearnUseState />

      <ComponentOneUseState
        count={count}
        onClickHandler={() => setCount(count + 1)}
      /> */}
      {/* <ArrowFunUseState /> */}
      {/* <TodoList /> */}
      {/* 2:34 */}
      {/* <CopyInputPortal /> */}
      {/* <BasicUseEffect /> */}
      {/* PropDrilling */}
      {/* <PropDrillingA name={name} /> */}
      {/* context API */}
      {/* <Data.Provider value={name}>
        <PropDrillingA />
      </Data.Provider> */}
      {/* <ProductData.Provider value={productData}>
        <PropDrillingA />
      </ProductData.Provider> */}
      {/* useContext Hook */}
      {/* <ProductData.Provider value={productData}>
        <UseContextHook />
      </ProductData.Provider> */}

      {/* useContext api  */}
      {/* <UserContextEx>
        <UserProfileUpdateUserContextEx />
      </UserContextEx> */}

      {/*  */}
      {/* UseReducer */}

      {/* <h1> Counter: {state.count} </h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>

      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

      <UseReducerHook /> */}
      {/*  */}

      {/* useRef */}
      {/* <UseRefHook /> */}

      {/* Custom Hooks */}

      <div>
        {data &&
          data.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })}
      </div>
    </section>
  );
}

export default App;
