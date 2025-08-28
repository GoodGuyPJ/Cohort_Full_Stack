import React, { useId } from "react";

const UniqueID = () => {
  const id = useId();

  return (
    <div>
      <label htmlFor={`${id}`}>Email</label>
      <input type="email" id={`${id}`} />

      <p id={`${id}--paragrah`}>Lorem, ipsum.d</p>
    </div>
  );
};

export default UniqueID;
