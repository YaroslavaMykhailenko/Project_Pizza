import React from  'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,  Routes,  Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import Navbar from './components/Navbar';
import Homepage from './screen/Homepage';
import Cartscreen from './screen/Cartscreen';
import Registerscreen from './screen/Registerscreen';
import Loginscreen from './screen/Loginscreen';
import Ordersscreen from './screen/Ordersscreen'
import Adminpage from './screen/Adminpage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Homepage />} />
      <Route path="/cart" exact element={<Cartscreen />} />
      <Route path="/register" exact element={<Registerscreen />} />
      <Route path="/login"  exact element={<Loginscreen />} />
      <Route path="/orders" exact element={<Ordersscreen />} />
      <Route path="/admin" element={<Adminpage />} />
    </Routes>
      </BrowserRouter>
        
  
    </div>
    
    
  );
 
}

export default App;


