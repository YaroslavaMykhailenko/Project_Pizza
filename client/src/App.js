import React from  'react'
import logo from './logo.svg';
import './App.css';
// import bootstrap from '../node_modules/bootstrap/dist/css/'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Homepage from './screen/Homepage';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>

    </div>
  );
}

export default App;
