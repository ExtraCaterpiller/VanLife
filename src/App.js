import Home from "./components/Home";
import About from "./components/About";
import  Navbar from './components/Navbar'
import Vans from './components/Vans'
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<Vans />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
