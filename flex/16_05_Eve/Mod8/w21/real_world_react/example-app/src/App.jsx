import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./contexts/useTheme";


import Welcome from "./components/Welcome";
import About from "./components/About";
import Login from "./components/Login";
import Error from "./components/Error";
import Navigation from "./components/Navigation";




function App() {


// inside component return
  return (
    <ThemeProvider>
    <Router>
      <Routes>
        <Route element={<Navigation />}>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error/>} />
        </Route>
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
