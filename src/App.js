import React from 'react';
// import * as React from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Menubar from './Components/Menubar/Menubar';
import AllProducts from './Components/AllProducts/AllProducts';
import { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

// import Test from './Components/Menubar/Test/Test';

function App() {
  const [count, setCount] = useState(0);
  
  const plusCartCount = () => {
    setCount(count + 1)
  } 
  
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div className="App">
      <Menubar count = {count}></Menubar>
      <AllProducts plusCartCount = {plusCartCount}></AllProducts>
    </div>
  );
}


{/* <Menubar></Menubar> */}
      {/* <h1></h1> */}
      {/* <Test></Test> */}

export default App;
