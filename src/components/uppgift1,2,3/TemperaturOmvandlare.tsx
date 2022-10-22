import { useState } from "react";
import "../App.css";

// Formel F till C: C = (F - 32) * (5/9).
// Formel C till F: F = C * (9/5) + 32.
// Fick inte till det med att man ska kunna ta in en string i inputfältet utan att det ger NaN.

const TemperaturOmvandlare = () => {
  const [temperature, setTemperature] = useState<any>({
    fahrenheit: "",
    celsius: "",
  });

  const celsiusConverter = (e: { target: { value: string | number } }) => { // Alltid typ string?
    setTemperature({
      celsius: e.target.value,
      fahrenheit: temperature.fahrenheit,
    });
    if(isNumeric(e.target.value)) {
      setTemperature({
        celsius: e.target.value,
        fahrenheit: (+e.target.value * (9 / 5) + 32).toFixed(2),
    });
  }
  
  };
  const fahrenheitConverter = (e: { target: { value: string | number } }) => {
    setTemperature({
        celsius: temperature.celsius,
        fahrenheit: e.target.value,
  });
    if(isNumeric(e.target.value)) {
      setTemperature({
        celsius: (((+e.target.value - 32) * 5) / 9).toFixed(2),
        fahrenheit: e.target.value,
    });
  }
  };
  function isNumeric(e: any) {
    return !isNaN(parseFloat(e)) && isFinite(e)
  }

 /* const celsiusConverter = (e: { target: { value: string } }) => {
    if (!isNumeric(e.target.value)){ 
        setTemperature({
        celsius: e.target.value,
        fahrenheit: (parseFloat(e.target.value) * (9 / 5) + 32).toFixed(2),
     })};
  };
  const fahrenheitConverter = (e: { target: { value: string } }) => {
         if (!isNumeric(e.target.value)){ 
        setTemperature({
        celsius: (((parseFloat(e.target.value) - 32) * 5) / 9).toFixed(2),
        fahrenheit: e.target.value,
    })}
        
    ;
  };

  const isNumeric = (n: any) => {
        if(isNaN(parseFloat(n)) && !isFinite(n)){
            return true;
        }
        return false;
  }
*/
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
