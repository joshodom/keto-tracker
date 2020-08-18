import React, { useState } from "react";
import logo from "./logo.svg";
import MacroDisplay from "./components/MacroDisplay";
import "./App.css";
import enter from "../src/images/enter.svg";

function useInput({ type /*...*/ }) {
  const [value, setValue] = useState("");
  const input = (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
    />
  );
  return [value, input];
}

function App() {
  const [calories, caloriesInput] = useInput({ type: "text" });
  return (
    <div className="App">
      <header className="App-header">
        <img src={enter} className="App-logo" alt="logo" />
        <p>Please enter your caloric goal: {caloriesInput}</p>
        <MacroDisplay calories={calories} />
      </header>
    </div>
  );
}

export default App;
