import React, { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  const inputElement = useRef(null);
  console.log(inputElement);

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "1000";
  };

  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={() => focusInput()}>Focus & write PJ</button>

      <h1>******************</h1>
      <h1>Counter: {count}</h1>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Stop Counter
      </button>
    </div>
  );
};

export default UseRefHook;
