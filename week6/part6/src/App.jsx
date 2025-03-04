import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [incomeTax, setIncomeTax] = useState(20000);
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      console.log(divRef.current);
      divRef.current.innerHTML = 10;
    }, 5000);
  });

  // const incomeTax = 20000;

  return (
    <div>
      hi ther, your income tac returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  );
}

export default App;
