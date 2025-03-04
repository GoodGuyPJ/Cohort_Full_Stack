import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// Lazy loading is a technique in React that allows you to load components only when they are needed. This can help reduce the size of your bundle and improve the performance of your app.
const Landing = lazy(() => import("./components/Landing"));
const Dashboard = lazy(() => import("./components/Dashboard"));
// import Dashboard from React.lazy(() => import("./components/Dashboard"));

// import { Dashboard } from "./components/Dashboard";
// import { Landing } from "./components/Landing";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          {/* <Route path="dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} /> */}

          {/* //Suspense Api asynchronous component featching,  asynchronous data fetching */}
          {/* suspense api - is a component that you can use to wrap around the components that are being lazy loaded. It will show a fallback UI until the lazy loaded component is loaded. */}
          <Route
            path="dashboard"
            element={
              <Suspense fallback={"loading..."}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={"loading..."}>
                <Landing />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function AppBar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing Page
      </button>

      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
    </div>
  );
}

export default App;
