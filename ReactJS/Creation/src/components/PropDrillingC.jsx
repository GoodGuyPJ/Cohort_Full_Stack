import React from "react";

const PropDrillingC = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default PropDrillingC;

//doing this way of prop drilling will be a nightmare now we will use context API