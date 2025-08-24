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
      <ConditionStatments isValid={true} />
    </section>
  );
}

export default App;
