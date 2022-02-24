import "./App.css";
import pJson from "../package.json";

function App() {
  return (
    <div className="App">
      <p>Version - {pJson.version} random test!</p>
    </div>
  );
}

export default App;
