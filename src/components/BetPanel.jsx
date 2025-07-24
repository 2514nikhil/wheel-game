import { useState } from "react";
import "../styles/BetPanel.css";

function BetPanel({ onSpin, spinning }) {
  const [mode, setMode] = useState("manual");
  const [betAmount, setBetAmount] = useState();

  const handleMultiply = (factor) => {
    setBetAmount((prev) => +(prev * factor));
  };

  const handleReset = () => {
    setBetAmount(0);
  };

  return (
    <div className="bet-panel">
      <div className="toggle-buttons">
        <div className="toggle-track">
          <div className={`toggle-slider ${mode}`}></div>
          <button
            className={mode === "manual" ? "active" : ""}
            onClick={() => setMode("manual")}
          >
            Manual
          </button>
          <button
            className={mode === "auto" ? "active" : ""}
            onClick={() => setMode("auto")}
          >
            Auto
          </button>
        </div>
      </div>

      <div className="input-group">
        <label>Bet Amount</label>
        <div className="bet-amount-box">
          <input
            type="number"
            step="0.1"
            value={betAmount}
            min={0}
            onChange={(e) => {
              const value = parseFloat(e.target.value);
              if (!isNaN(value) && value >= 0) {
                setBetAmount(value);
              } else {
                setBetAmount(0);
              }
            }}
          />

          <div className="bet-multipliers">
            <button onClick={() => handleMultiply(0.5)}>½</button>
            <button onClick={() => handleMultiply(2)}>2×</button>
            <button onClick={handleReset}>⟳</button>
          </div>
        </div>
      </div>

      <div className="input-group">
        <label>Risk</label>
        <select>
          <option>Medium</option>
          <option>Low</option>
          <option>High</option>
        </select>
      </div>

      <button className="bet-btn" onClick={onSpin} disabled={spinning}>
        {spinning ? "Spinning..." : "Play"}
      </button>
    </div>
  );
}

export default BetPanel;
