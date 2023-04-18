import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Nav from "./components/Nav";
import ProtectedRoute from "./components/ProtectedRoute";
import ProductList from "./components/ProductList";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(true);
  return (
    <div className="App">
      <h2>React Router Demo</h2>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='*' element={<h1>404 Page not Found</h1>} />
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <ProtectedRoute user={user}>
                <About />
              </ProtectedRoute>
            }
          />
          <Route path="/products/*" element={<ProductList/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
