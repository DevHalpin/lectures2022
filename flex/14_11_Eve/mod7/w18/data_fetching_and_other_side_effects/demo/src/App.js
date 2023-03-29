import "./App.css";
import { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [item, setItem] = useState({});
  useEffect(() => {
    console.log("changing title");
    document.title = `You click ${count} times!`;
    const interval = setInterval(() => {
      console.log(`Current count is ${count}`);
    }, 1000);

    axios.get('http://hn.algolia.com/api/v1/items/1')
    .then(res => {
      setItem(res.data)
      console.log(res)
    })


    const cleanUp = () => {
      console.log("running cleanup");
      clearInterval(interval);
    };
    return cleanUp;
  },[]);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment
      </button><br/>
      <label htmlFor="search">Search Term:</label>
      <input
        type="text"
        id="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
}

export default App;
