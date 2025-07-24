import "../styles/wheel.css";

function Wheel({ rotation, spinning, result }) {
  const wheelStyle = {
    transform: `rotate(${rotation}deg)`,
    transition: spinning
      ? "transform 8s cubic-bezier(0.33, 1, 0.68, 1)"
      : "none",
  };

  return (
    <div className="wheel-wrapper">
      <div className="wheel" style={wheelStyle} />
      <div className="wheel-center" />
      <div className="inner-circle">
        {result && <div className="spin-result">{result}</div>}
      </div>
    </div>
  );
}

export default Wheel;
