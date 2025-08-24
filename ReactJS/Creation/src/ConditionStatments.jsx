import React from "react";
const ValidPassword = () => <h1>valid</h1>;
const INvalidPassword = () => <h1>INvalid</h1>;

const Cart = () => {
  const items = ["moblie", "footwear", "mouse"];

  return (
    <div>
      {items.length > 0 && <h2>You have {items.length} items in your cart </h2>}

      <ul>
        <h4>Products</h4>
        {items.map((i) => (
          <li key={Math.random()}> {i} </li>
        ))}
      </ul>
    </div>
  );
};

const ConditionStatments = () => {
  // if (isValid) {
  //   return <ValidPassword />;
  // }

  // return <INvalidPassword />;

  return <Cart />;
};

export default ConditionStatments;
