import React from "react";

const Props = () => {
  return <User name="PJ" age={22} isMarried={false} />;
};

const User = (props) => {
  console.log(props);
  return (
    <section>
      <h2>Name: {props.name}</h2>
      <h3>Is Married: {props.isMarried ? "Married" : "UnMarried"} </h3>
    </section>
  );
};

export default Props;
