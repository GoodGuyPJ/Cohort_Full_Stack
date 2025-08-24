import React, { useEffect, useState } from "react";

const ArrowFunUseState = () => {
  const [count, setCount] = useState(() => {
    let initialVal = 10;
    return initialVal;
  });

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const [random, setRandom] = useState(() => {
    Math.floor(Math.random() * 100);
  });
  const generateRandomNum = () => {
    const newNumber = Math.floor(Math.random() * 100);
    setRandom(newNumber);
  };

  const [name, setName] = useState(() => {
    const saveName = localStorage.getItem("name");
    return saveName ? JSON.parse(saveName) : "PJ-Created This";
  });

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClear = () => {
    setName("");
  };

  return (
    <div>
      <h1>Arrow function in UseState</h1>
      <h2>count: {count} </h2>
      <button onClick={increment}>Increment the counter</button>

      <h1>Example 2</h1>
      <h2>Random number: {random} </h2>
      <button onClick={generateRandomNum}>Generate random number</button>

      <h1>For name usestate example 3</h1>
      <h1>Your Name: {name} </h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter Name"
      />

      <button onClick={handleClear}>Clear Number</button>
    </div>
  );
};

export default ArrowFunUseState;
