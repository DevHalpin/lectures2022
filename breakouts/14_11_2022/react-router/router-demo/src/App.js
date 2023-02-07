import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Nav from "./components/Nav";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [user, setUser] = useState("user")
  return (
    <div className="App">
      <h2>React Router Demo</h2>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/secret" element={<ProtectedRoute user={user}>
            <About/>
          </ProtectedRoute>} />
          <Route path="/products/*" element={<ProductList/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
