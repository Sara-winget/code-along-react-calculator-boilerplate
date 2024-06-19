import React, { useState } from "react";
import "./App.css";
function Calculator() {
  const [btnvalue, setBtnValue] = useState("");
  const handleclick = (val) => {
    setBtnValue((prevState) => {
      if (
        prevState.slice(-1) === "X" ||
        prevState.slice(-1) === "/" ||
        prevState.slice(-1) === "-" ||
        prevState.slice(-1) === "+"
      ) {
        handleCalculation();
        return prevState + val;
      } else {
        return prevState + val;
      }
    });
  };
  const handleDelete = () => {
    setBtnValue((prevState) => prevState.slice(0, -1));
  };
  const handleClear = () => {
    setBtnValue("");
  };
  const handleCalculation = () => {
    try {
      setBtnValue((prevState) => eval(prevState.replace(/X/g, "*")).toString());
    } catch {
      setBtnValue("Error");
    }
  };

  console.log(btnvalue);

  return (
    <div className="calculator-page">
      <div className="calculator">
        <div className="display">{btnvalue}</div>
        <div className="row-btn">
          <button onClick={() => handleclick(7)}>7</button>
          <button onClick={() => handleclick(8)}>8</button>
          <button onClick={() => handleclick(9)}>9</button>
          <button onClick={handleDelete}>del</button>
          <button onClick={handleClear}>esc</button>
        </div>
        <div className="row-btn">
          <button onClick={() => handleclick(4)}>4</button>
          <button onClick={() => handleclick(5)}>5</button>
          <button onClick={() => handleclick(6)}>6</button>
          <button onClick={() => handleclick("X")}>x</button>
          <button>/</button>
        </div>
        <div className="row-btn">
          <button onClick={() => handleclick(1)}>1</button>
          <button onClick={() => handleclick(2)}>2</button>
          <button onClick={() => handleclick(3)}>3</button>
          <button onClick={() => handleclick("-")}>-</button>
          <button onClick={() => handleclick("+")}>+</button>
        </div>
        <div className="row-btn">
          <button onClick={() => handleclick(0)} className="zero">
            0
          </button>
          <button>.</button>
          <button className="equal">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;