import logo from './logo.svg';
import './App.css';
import Menubar from './Components/Menubar/Menubar';
import AllProducts from './Components/AllProducts/AllProducts';
import { useState } from 'react';
// import Test from './Components/Menubar/Test/Test';

function App() {
  const [count, setCount] = useState(0);
  
  const plusCartCount = () => {
    setCount(count + 1)
  } 
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
