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
    </div>
  );
}

export default App;
