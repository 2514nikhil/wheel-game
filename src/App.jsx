import { useState } from "react";
import "./App.css";
import BetPanel from "./components/BetPanel";
import Wheel from "./components/Wheel";
import Pointer from "./components/Pointer";

const segments = [
  { start: 0, end: 12, result: "0.00x" },
  { start: 12, end: 24, result: "1.50x" },
  { start: 24, end: 36, result: "0.00x" },
  { start: 36, end: 48, result: "2.00x" },
  { start: 48, end: 60, result: "0.00x" },
  { start: 60, end: 72, result: "1.50x" },
  { start: 72, end: 84, result: "0.00x" },
  { start: 84, end: 96, result: "2.00x" },
  { start: 96, end: 108, result: "0.00x" },
  { start: 108, end: 120, result: "1.50x" },
  { start: 120, end: 132, result: "0.00x" },
  { start: 132, end: 144, result: "2.00x" },
  { start: 144, end: 156, result: "0.00x" },
  { start: 156, end: 168, result: "1.50x" },
  { start: 168, end: 180, result: "0.00x" },
  { start: 180, end: 192, result: "4.00x" },
  { start: 192, end: 204, result: "0.00x" },
  { start: 204, end: 216, result: "2.00x" },
  { start: 216, end: 228, result: "0.00x" },
  { start: 228, end: 240, result: "1.50x" },
  { start: 240, end: 252, result: "0.00x" },
  { start: 252, end: 264, result: "3.00x" },
  { start: 264, end: 276, result: "0.00x" },
  { start: 276, end: 288, result: "2.00x" },
  { start: 288, end: 300, result: "0.00x" },
  { start: 300, end: 312, result: "1.50x" },
  { start: 312, end: 324, result: "0.00x" },
  { start: 324, end: 336, result: "2.00x" },
  { start: 336, end: 348, result: "0.00x" },
  { start: 348, end: 360, result: "1.70x" },
];

function getResultFromRotation(rotation) {
  const normalizedDeg = (rotation % 360 + 360) % 360;
  const pointerDeg = (normalizedDeg + 180) % 360;

  const segment = segments.find(
    (seg) => pointerDeg >= seg.start && pointerDeg < seg.end
  );

  return segment?.result || "Unknown";
}

function App() {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState(null);

  const handleSpin = () => {
    if (spinning) return;

    const randomDeg = Math.floor(Math.random() * 360) + 360 * 5;
    const finalRotation = rotation + randomDeg;

    setRotation(finalRotation);
    setSpinning(true);
    setResult(null);

    setTimeout(() => {
      const landedResult = getResultFromRotation(finalRotation);
      setResult(landedResult);
      setSpinning(false);
    }, 8000);
  };

  return (
    
    <div className="app-container">
      <BetPanel onSpin={handleSpin} spinning={spinning} />

      <div className="wheel-container">
        <div className="wheel-section">
          <Pointer />
          <Wheel rotation={rotation} spinning={spinning} result={result} />
        </div>

        <div className="wheel-legend">
          <div className="legend-item" style={{ backgroundColor: "#3a4d5f" }}>
            0.00x
          </div>
          <div
            className="legend-item"
            style={{ backgroundColor: "#9df537", color: "#000" }}
          >
            1.50x
          </div>
          <div
            className="legend-item"
            style={{ backgroundColor: "#d3e4ff", color: "#000" }}
          >
            1.70x
          </div>
          <div
            className="legend-item"
            style={{ backgroundColor: "#f6e05e", color: "#000" }}
          >
            2.00x
          </div>
          <div className="legend-item" style={{ backgroundColor: "#a259ff" }}>
            3.00x
          </div>
          <div className="legend-item" style={{ backgroundColor: "#ff9f1c" }}>
            4.00x
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
