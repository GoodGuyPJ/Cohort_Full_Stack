import React, { useContext } from "react";

import { ProductData } from "../App";

const UseContextHook = () => {
  const ProductDATA = useContext(ProductData);

  return (
    <div>
      <h1>Product Name: {ProductDATA.name} </h1>
      <h1>Product Brand: {ProductDATA.brand} </h1>
    </div>
  );
};

export default UseContextHook;
