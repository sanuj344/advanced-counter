import { useState } from "react";

function Counter() {
  const MIN = 0;
  const MAX = 100;

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => {
    setCount(prev => Math.min(prev + step, MAX));
  };

  const decrement = () => {
    setCount(prev => Math.max(prev - step, MIN));
  };

  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h1>Advanced Counter</h1>
      <h2>{count}</h2>

      <button onClick={decrement} disabled={count === MIN}>-</button>
      <button onClick={increment} disabled={count === MAX}>+</button>
      <button onClick={reset}>Reset</button>

      <div style={{ marginTop: 20 }}>
        <p>Step:</p>
        {[1, 5, 10].map(val => (
          <button
            key={val}
            onClick={() => setStep(val)}
            style={{
              margin: 5,
              background: step === val ? "#333" : "#ccc",
              color: step === val ? "#fff" : "#000"
            }}
          >
            +{val}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Counter;
