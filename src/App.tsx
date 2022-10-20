import "./App.css";
import Counter from "./components/Counter";
import TemperaturOmvandlare from "./components/TemperaturOmvandlare";
import Timer from "./components/Timer";

// Det här med att skapa en ram var oklart för mig. Hoppas det ser okej ut trots det.

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
