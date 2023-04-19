import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Nav from "./components/Nav";
import Error from "./components/Error";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import ProductList from "./components/ProductList";
import { useState } from "react";
import SuccessfulLogin from "./components/SuccessfulLogin";
import Welcome from "./components/Welcome";
import { ThemeProvider } from './contexts/useTheme'
import UseRef from "./components/UseRef";

function App() {
  const [user, setUser] = useState(true)
  // inside component return
  return (
    <>
      <h2>Our Demo App</h2>
      <ThemeProvider>
        <UseRef/>
      <Router>
        <Nav/>
      <Routes>
        <Route path={"*"} element={<Error />} />
        <Route path={'/'} element={<Welcome/>} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/about'} element={<ProtectedRoute user={user}>
          <About/>
        </ProtectedRoute>}
        />
        <Route path={'/products/*'} element={<ProductList />} />
        <Route path={'/success/'} element={<SuccessfulLogin />} />
    
      </Routes>
      </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
