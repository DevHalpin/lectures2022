import './App.css'
import DinoCatList from "./components/DinoCatList";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [dinoCatState, setDinoCatState] = useState([]);

  useEffect(() => {
    axios.get("/dinocats").then((response) => {
      setDinoCatState(response.data);
    });
  }, []);

  return (
    <div className='App App-header'>
      <h2>The Dinocat App</h2>
      <DinoCatList dinoCats={dinoCatState} />
      
    </div>
  );
}

export default App;
