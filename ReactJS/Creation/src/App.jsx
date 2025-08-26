// import { Greet } from "./components/Greet";
import "./index.css";

import Greet from "./components/Greet";
import UserList from "./components/UserList";
import Props from "./components/Props";
import ConditionStatments from "./ConditionStatments";

// React icons
import { ImAmazon } from "react-icons/im";
import { ImBrightnessContrast } from "react-icons/im";
import { ImCool } from "react-icons/im";
import { FaBeerMugEmpty } from "react-icons/fa6";
import LearnUseState from "./components/LearnUseState";
import ComponentOneUseState from "./components/ComponentOneUseState";
import { useState } from "react";
import ArrowFunUseState from "./components/ArrowFunUseState";
import TodoList from "./components/TodoList";
import CopyInputPortal from "./components/CopyInputPortal";
import BasicUseEffect from "./components/BasicUseEffect";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="root">
      {/* <Greet /> */}
      {/* <UserList /> */}
      {/* <Props /> */}
      {/* <ConditionStatments isValid={true} /> */}
      {/* <h1
        style={{
          color: "red",
          backgroundColor: "Blue",
          padding: "20px",
          width: "50%",
          justifyContent: "center",
          display: "flex",
        }}
      >
        Inline styles
      </h1> */}
      {/* React Icons */}
      {/* <h3>React Icons: Examples</h3>
      <div style={{ fontSize: "100px", padding: "20px" }}>
        <ImAmazon style={{ fontSize: "100px", padding: "20px" }} />
        <ImBrightnessContrast style={{ fontSize: "100px", padding: "20px" }} />
        <ImCool style={{ fontSize: "100px", padding: "20px" }} />
      </div>

      <div>
        <h2>
          Chears:
          <p style={{ fontSize: "150px", color: "brown" }}>
            <FaBeerMugEmpty onClick={() => alert("chears boys")} />
          </p>
        </h2>
      </div> */}

      {/* Time: 1:47 */}

      {/* <LearnUseState />

      <ComponentOneUseState
        count={count}
        onClickHandler={() => setCount(count + 1)}
      /> */}

      {/* <ArrowFunUseState /> */}

      {/* <TodoList /> */}

      {/* 2:34 */}

      {/* <CopyInputPortal /> */}
      <BasicUseEffect />
    </section>
  );
}

export default App;
