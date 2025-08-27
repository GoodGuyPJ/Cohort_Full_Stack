import React, { useRef } from "react";

const UseRefHook = () => {
  const inputElement = useRef(null);
  console.log(inputElement);

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "1000";
  };

  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={() => focusInput()}>Focus & write PJ</button>
    </div>
  );
};

export default UseRefHook;
