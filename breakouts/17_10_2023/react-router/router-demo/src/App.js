import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Nav from "./components/Nav";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [user, setUser] = useState("user");
  return (
    <div className="App">
      <h2>React Router Demo</h2>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/products/*"
            element={
              <ProtectedRoute user={user}>
                <ProductList />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
