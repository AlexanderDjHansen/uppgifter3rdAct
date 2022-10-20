import { useState } from "react";
import "../App.css";

// Formel F till C: C = (F - 32) * (5/9).
// Formel C till F: F = C * (9/5) + 32.

const TemperaturOmvandlare = () => {
  const [temperature, setTemperature] = useState<any>({
    fahrenheit: "",
    celsius: "",
  });

  const celsiusConverter = (e: { target: { value: string | number } }) => {
    setTemperature({
      celsius: e.target.value,
      fahrenheit: (+e.target.value * (9 / 5) + 32).toFixed(2),
    });
  };
  const fahrenheitConverter = (e: { target: { value: string | number } }) => {
    setTemperature({
      celsius: (((+e.target.value - 32) * 5) / 9).toFixed(2),
      fahrenheit: e.target.value,
    });
  };
  console.log(temperature);

  return (
    <div className="converter">
        <div className="container">
      <input
        className="input"
        type="text"
        value={temperature.celsius}
        onChange={(e) => {
          celsiusConverter(e);
        }}
      />
      <p>Celcius = </p>
      <input
        className="input"
        type="text"
        value={temperature.fahrenheit}
        onChange={(e) => {
          fahrenheitConverter(e);
        }}
      />
      <p>Fahrenheiht</p>
      </div>
    </div>
  );
};

export default TemperaturOmvandlare;
