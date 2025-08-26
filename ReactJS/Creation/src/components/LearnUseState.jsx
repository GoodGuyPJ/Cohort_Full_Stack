import React, { useState } from "react";

const LearnUseState = () => {
  const [count, setCount] = useState(0);
  // const counter = useState(0)
  const increment = () => setCount(count + 1);

  const [friends, setFriends] = useState(["John", "ravi", "sachin", "Alex"]);

  const addMoreFriends = (i = 0) =>
    setFriends([...friends, `friends ${i + 1}`]);

  const removeFriends = () => setFriends(friends.filter((f) => f !== "John"));

  const updateOneFriends = () =>
    setFriends(friends.map((f) => (f === "Alex" ? "Alex Smith" : f)));

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>

      <h1>friends list</h1>
      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}

      <h2>Added more friends list</h2>
      <button onClick={() => addMoreFriends(friends.length)}>
        Addmore friends
      </button>
      {friends.map((f) => (
        <li key={Math.random()}>{f} </li>
      ))}

      <button onClick={removeFriends}>Reomve Friends</button>

      <button onClick={updateOneFriends}>Update One Friends Name</button>
    </div>
  );
};

export default LearnUseState;
