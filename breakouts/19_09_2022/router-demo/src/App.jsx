import './App.css'
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Nav from './components/Nav'
import Products from './components/Products'
import { createContext } from 'react'

const themes = {
  light: {
    foreground: "#000000",
    background: "#7a7979"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
}

const ThemeContext = createContext(themes.light);

export {ThemeContext}

function App() {

  const loggedIn = false
 
  return (
    <ThemeContext.Provider value={themes.light} >
    <div className="App">
      <h2>React Router Demo</h2>
      <Router>
      <Nav/>
        <Routes>
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products/*" element={loggedIn ? <Products/> : <Navigate to="/"/>} />
        </Routes>
      </Router>
    </div>
    </ ThemeContext.Provider>
  )
}

export default App
