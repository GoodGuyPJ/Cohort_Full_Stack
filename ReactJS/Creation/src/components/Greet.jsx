import React from "react";

const Greet = () => {
  const Name = "PJ";
  let multiply = (a, b) => {
    a * b;
  };
  const Product = {
    name: "laptop",
    price: 323,
  };

  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      {/* <h1>Hi there</h1> */}
      <p>Hi {Name}</p>
      <p>{2 + 2}</p>
      <p>4*4={multiply(4, 4)}</p>
      <p>
        Product:
        {Product.name},{Product.price}
      </p>

      {numbers.map((num) => (
        <ul>
          <li>{num}</li>
        </ul>
      ))}
    </div>
  );
};

export default Greet;
