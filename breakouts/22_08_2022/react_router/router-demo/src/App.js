import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <h2>React Router Demo</h2>
      <BrowserRouter>
      <Nav/>
        <Routes>
            <Route path="*" element={<h1>404 Page Not Found</h1>} />
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/products/*" element={<Products/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
