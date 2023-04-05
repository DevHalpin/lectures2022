import { useEffect, useState } from 'react';
import './App.css';
import CookieForm from './components/CookieForm';
import CookieList from './components/CookieList';
import axios from "axios";

function App() {
  const [cookieState, setCookieState] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/cookies").then((response) => {
      setCookieState(response.data);
    })
  }, []);

  return (
    <div className="App">
      <CookieForm setCookieState={setCookieState}/>
      <CookieList cookies={cookieState}/>
      
    </div>
  );
}

export default App;
