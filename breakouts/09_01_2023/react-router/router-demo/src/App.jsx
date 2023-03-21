import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ProtectedRoute from "./components/ProtectedRoute";
import Secret from "./components/Secret";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import {useState} from 'react';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <h2>React Router Demo</h2>
      <Router>
        <Nav/>
        <Routes>
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/*" element={<ProductList />} />
          <Route
            path="/secret"
            element={
              <ProtectedRoute user={user}>
                <Secret />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
