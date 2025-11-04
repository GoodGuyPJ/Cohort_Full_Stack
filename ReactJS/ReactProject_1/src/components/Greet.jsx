import React from "react";

const Greet = () => {

  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ]

  return (
    <div>
      {users.map(user => {
        return <h1 key={user.id}>Hello, {user.name}!</h1>;
      })}
    </div>

  );
};

export default Greet;
