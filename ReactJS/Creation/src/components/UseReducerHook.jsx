import React, { useReducer, useState } from "react";

import {
  initialState,
  counterReducer,
} from "../reuseFunctions/counterReducter";

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  const handleIncrement = () => {
    dispatch({ type: "incrementByAmount", payload: +inputValue });
    setInputValue('');
  };
  const handleReduce = () => {
    dispatch({ type: "reduceByAmount", payload: +inputValue });
    setInputValue('');
  };

  return (
    <div>
      <h1> Counter: {state.count} </h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>

      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleIncrement}>Add</button>
        <button onClick={handleReduce}>Reduce</button>
      </div>
    </div>
  );
};

export default UseReducerHook;
