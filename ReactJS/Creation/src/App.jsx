// import { Greet } from "./components/Greet";
import "./index.css";

import Greet from "./components/Greet";
import UserList from "./components/UserList";

function App() {
  return (
    <section className="root">
      {/* <Greet /> */}
      <UserList />
    </section>
  );
}

export default App;
