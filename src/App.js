import Home from "./components/Home";
import About from "./components/About";
import  Navbar from './components/Navbar'
import Vans from './components/Vans'
import Footer from "./components/Footer";
import VanDetail from './components/VanDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './components/server'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<Vans />} />
          <Route path='/vans/:id' element={<VanDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
