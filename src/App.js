import React, { useState } from "react";
import Articles from "./components/Articles";
import User from "./components/User";
import "./index.css";
// import SkeletonElement from "./skeletons/SkeletonElement";

function App() {
  const [theme, setTheme] = useState("light");

  const themeTogger = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="App">
      <header class="section-header">
        <h2>react-skeleton</h2>
        <button class="toggleBtn" onClick={themeTogger}>
          Toggle Theme
        </button>
      </header>
      <div className="content">
        <Articles theme={theme} />
        <User theme={theme} />
      </div>
      <div class="footer">
        <p>
          Copyright Credits @{" "}
          <a
            style={{ textDecoration: "none", color: "#eee" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/watch?v=cg_tmJBisp8&list=PL4cUxeGkcC9i6bZhMuAzQpC6YgLmB4k4-&index=1"
          >
            The Net Ninja{" "}
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
