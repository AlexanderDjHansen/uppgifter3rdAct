import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
        <div className="counter-container">
      <input type="text" disabled value={count} style={{ width: "2rem" }} />
      <button onClick={() => setCount(count + 1)}>Count</button>
      </div>
    </div>
  );
};

export default Counter;
