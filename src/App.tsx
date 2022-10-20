import "./App.css";
import Counter from "./components/Counter";
import TemperaturOmvandlare from "./components/TemperaturOmvandlare";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="App">
      <Counter />
      <TemperaturOmvandlare />
      <Timer />
    </div>
  );
}

export default App;
