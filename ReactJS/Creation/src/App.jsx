// import { Greet } from "./components/Greet";
import "./index.css";

import Greet from "./components/Greet";
import UserList from "./components/UserList";
import Props from "./components/Props";
import ConditionStatments from "./ConditionStatments";

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
    </section>
  );
}

export default App;
