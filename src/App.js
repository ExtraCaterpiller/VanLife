import Home from "./components/Home";
import About from "./components/About";
import Vans from './components/Vans';
import VanDetail from './components/VanDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Income from './host/Income';
import Reviews from './host/Reviews';
import Dashboard from './host/Dashboard';
import HostLayout from "./host/HostLayout";
import HostVans from "./host/HostVans";
import HostVansid from "./host/HostVansid";
import HostDashboard from "./host/HostDashboard";
import HostPricing from "./host/HostPricing";
import HostPhotos from "./host/HostPhotos";
import './components/server';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='vans' element={<Vans />} />
              <Route path='vans/:id' element={<VanDetail />} />
              <Route path='host' element={<HostLayout />} >
                <Route index element={<Dashboard />} />
                <Route path='income' element={<Income />} />
                <Route path='vans' element={<HostVans />} />
                <Route path='vans/:id' element={<HostVansid />} >
                  <Route index element={<HostDashboard />}></Route>
                  <Route path="pricing" element={<HostPricing />}></Route>
                  <Route path="photos" element={<HostPhotos />}></Route>
                  
                </Route>
                <Route path='reviews' element={<Reviews />} />
              </Route>
              
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
