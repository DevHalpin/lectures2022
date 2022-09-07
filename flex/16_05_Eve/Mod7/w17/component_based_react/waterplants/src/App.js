import "./App.css";
import PlantList from "./components/PlantList";
import SampleControlledComponent from "./components/SampleControlledComponent";


function App() {
  return (
    <div>
      <h1> Watering Plants</h1>
      <SampleControlledComponent />
      <PlantList/>
    </div>
  );
}

export default App;
