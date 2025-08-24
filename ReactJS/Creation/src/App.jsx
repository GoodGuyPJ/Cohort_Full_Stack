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

function App() {
  return (
    <section className="root">
      {/* <Greet /> */}
      {/* <UserList /> */}
      {/* <Props /> */}
      {/* <ConditionStatments isValid={true} /> */}

      <h1
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
      </h1>

      {/* React Icons */}
      <h3>React Icons: Examples</h3>
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
      </div>
    </section>
  );
}

export default App;
