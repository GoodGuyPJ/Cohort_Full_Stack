import React, { useState } from "react";
import "../index.css";
import { FaSearch } from "react-icons/fa";

const HiddenSearchBar = () => {
  const [showInput, setshowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handleClick = (e) => {
    setBgColor("#1b1b1b");
    if (e.taget.className === "container") {
      setshowInput(false);
      setBgColor("#fff");
    }
  };

  return (
    <section
      className="container"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {showInput ? (
        <input type="text" placeholder="Search" />
      ) : (
        <FaSearch onClick={() => setshowInput(true)} />
      )}
    </section>
  );
};

export default HiddenSearchBar;
