import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [bill, setBill] = useState(0.0);
  const [tip, setTip] = useState(0.0);
  const [noofpeople, setnoofPeople] = useState(0);
  const [customTip, setCustomTip] = useState("");

  //funtion to calculate the tip
  const calculateTip = () => {
    if (noofpeople >= 1) {
      const tipAmount = (bill * tip) / noofpeople;
      const total = (bill * (1 + tip)) / noofpeople;
      return { tipAmount, total };
    }
    return { tipAmount: 0, total: 0 };
  };
  // handle custom tip click
  const handleTipClick = (value) => {
    setTip(value);
    setCustomTip("");
  };

  //handle reset button, reset each values to default
  const handleReset = () => {
    setBill(0.0);
    setTip(0.15);
    setnoofPeople(1);
    setCustomTip("");
  };

  const { tipAmount, total } = calculateTip();

  return (
    <div className="app">
      <h1>splitter</h1>
      <div className="calculator">
        <div className="inputdata">
          <div className="bill">
            <label htmlFor="bill">Bill</label>
            <input
              type="number"
              id="bill"
              placeholder="0.00"
              value={bill}
              onChange={(e) => setBill(parseFloat(e.target.value))}
            />
          </div>
          <div className="selectTip">
            <p>Select Tip%</p>
            <div className="tipoptions">
              {[5, 10, 15, 25, 50].map((tip) => (
                <button
                  key={tip}
                  className={`tip ${tip === tip / 100 ? "active" : ""}`}
                  onClick={() => handleTipClick(tip / 100)}
                >
                  {tip}%
                </button>
              ))}
              <input
                type="number"
                id="owntip"
                placeholder="Custom"
                value={customTip}
                onChange={(i) => {
                  setTip(parseFloat(i.target.value) / 100);
                  setCustomTip(i.target.value);
                }}
              />
            </div>
          </div>
          <div className="nopeople">
            <label htmlFor="people">Number of People</label>
            <input
              type="number"
              id="people"
              placeholder="1"
              value={noofpeople}
              onChange={(e) => setnoofPeople(parseFloat(e.target.value))}
            />
          </div>
        </div>
        <div className="calculator-output">
          <div className="output">
            <div className="results">
              <p>Tip Amount</p>
              <p>/person</p>
              <span id="tip-amount">${tipAmount.toFixed(2)}</span>
            </div>
            <div className="total">
              <p>Total</p>
              <p>/person</p>
              <span id="total-amount">${total.toFixed(2)}</span>
            </div>
          </div>
          <button id="resets" onClick={handleReset}>
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
