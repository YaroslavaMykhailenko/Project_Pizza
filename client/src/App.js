import React from  'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,  Routes,  Route, Link , Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import Navbar from './components/Navbar';
import Homepage from './screen/Homepage';
import Cartscreen from './screen/Cartscreen';
import Registerscreen from './screen/Registerscreen';
import Loginscreen from './screen/Loginscreen';
import Ordersscreen from './screen/Ordersscreen'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/cart" element={<Cartscreen />} />
      <Route path="/register" element={<Registerscreen />} />
      <Route path="/login" element={<Loginscreen />} />
      <Route path="/orders" element={<Ordersscreen />} />
    </Routes>
      </BrowserRouter>
        
  
    </div>
    
    
  );
 
}

export default App;


