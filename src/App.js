import React, { useState } from "react";

import "./App.css";
import "./index.css";

function App() {
  const [result, setResult] = useState("");
  const [calc, setCalc] = useState("");

  const ops = ["/", "-", "+", "*", "."];

  const handleClick = (value) => {
    if (ops.includes(value) && ops.includes(calc.slice(-1))) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setCalc(eval(calc + value).toString());
    }
  };

  const createDigiht = () => {
    const digiht = [];
    for (let i = 0; i < 10; i++) {
      digiht.push(
        <button onClick={() => handleClick(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digiht;
  };

  const calculte = () => {
    setResult(eval(calc).toString());
  };

  const deleteList = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);

    setCalc(value);
  };
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""}&nbsp;
          {calc || "0"}
        </div>
        <div className="oprations">
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("*")}>*</button>
          <button onClick={() => handleClick("/")}>/</button>
          <button onClick={deleteList}>clear</button>
        </div>
        <div className="digiht">
          {createDigiht()}
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={calculte}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
