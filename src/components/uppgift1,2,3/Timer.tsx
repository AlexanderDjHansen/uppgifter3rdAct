import { useEffect, useState } from "react";
import "../App.css";

// https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks
// Använde den sidan för att hitta formeln för stopur funktionen.

const Timer = () => {
  const [isActive, setIsActive] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [time, setTime] = useState(0);
  const [maxValue, setMaxValue] = useState(100);

  // console.log(new Date().getTime()); 
  
  const changeDuration = (e: any) => {
    setMaxValue(e.target.value);
    setIsPaused(false);
  };

  useEffect(() => {
    let interval: any = null;

    if (time >= maxValue) {
      setIsPaused(true);
    }
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((prevTime) => (prevTime + 0.1));
      }, 100);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  return (
    <div className="timer">
      <div className="timer-container">
        <div>
          <label>Elapsed Time: </label>
          <progress max={maxValue} value={time}></progress>
        </div>
        <div>
        
          <span>{time}s</span>
        </div>
        <div>
          <label>Duration: </label>
          <input
            type="range"
            min={1}
            max={100}
            step={1}
            value={maxValue}
            onChange={(e) => changeDuration(e)}
          />{" "}
          {maxValue}s
        </div>
        <button
          className="reset-button"
          onClick={() => {
            setTime(0);
            setIsPaused(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
