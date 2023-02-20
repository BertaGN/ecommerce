import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { ProductList } from "./components/ProductList/ProductList";


function App() {
  const [count, setCount] = useState(0)
  const [currProduct, setCurrProduct] = useState("")
  return (
    <div>
      <Navbar />
      <p>Contador:{count}</p>
      <p>Currrent product: {currProduct}</p>
      <ProductList setCount={setCount} count ={count} setCurrProduct={setCurrProduct}/>
    </div>
  );
}

export default App;