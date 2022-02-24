import React from "react";
import logo from "./logo.svg";
import "./App.css";
import pJson from "../package.json";

function App() {
  return (
    <div className="App">
      <p>Version - {pJson.version}</p>
    </div>
  );
}

export default App;
