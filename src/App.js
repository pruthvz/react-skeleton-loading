import "./index.css";
import Articles from "./components/Articles";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <header>
        <h2>react-skeleton</h2>
      </header>
      <div className="content">
        <Articles />
        <User />
      </div>
    </div>
  );
}

export default App;
