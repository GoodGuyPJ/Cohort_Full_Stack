//Approcah 1: Using useMemo
import React, { useEffect, useMemo, useState } from "react";
import { use } from "react";
/**
   Create an app that does two things:
   1. Increase a counter by 1
   2. lets user put a value in an input box(n) and you need to show sum form 1-n.
 */

//useMemo is used to memoize the value of count so that it does not get recalculated on every render
function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   let count = 0;
  //   for (let i = 1; i <= inputValue; i++) {
  //     count = count + i;
  //   }
  //   setFinalValue(count);
  // }, [inputValue]);

  /*useMemo
  let count = useMemo(() => {
    let count = 0;
    for (let i = 1; i <= inputValue; i++) {
      count += i;
    }
    return count;
  }, [inputValue]);*/

  // let count = 0;
  // for (let i = 1; i <= inputValue; i++) {
  //   count += i;
  // }

  //Approch 2
  useEffect(() => {
    let finalCount = 0;
    for (let i = 1; i <= inputValue; i++) {
      finalCount = finalCount + i;
    }
    setCount(finalCount);
  }, [inputValue]);

  return (
    <div>
      <input
        type="text"
        onChange={function (e) {
          setInputValue(e.target.value);
        }}
        placeholder="Enter a number to find sum from 1 to n"
      />{" "}
      <br />
      sum from 1 to {inputValue} is {count}
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter ({counter}){" "}
      </button>
    </div>
  );
}

export default App;



// useCallback and useMemo
import { memo, useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const inputFunction = useCallback(() => {
    console.log("hi there");
  }, []);

  return (
    <div>
      <ButtonComponent inputFunction={inputFunction} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me {count}
      </button>
    </div>
  );
}

const ButtonComponent = memo(({ inputFunction }) => {
  console.log("child render");

  return (
    <div>
      <button>Click me</button>
    </div>
  );
});

export default App;
