import { Link, Outlet } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Library</h1>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/books">Books</Link>
        {"      "}
        <Link to="/about">About me</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
