import React, {useState} from 'react';
import { Footer } from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { ProductList } from '../../components/ProductList/ProductList';


function Home() {
    const [count, setCount] = useState(0)
    const [setCurrProduct] = useState([])
  return <div>
    <Navbar count = {count}/>
    <ProductList setCount={setCount} count ={count} setCurrProduct={setCurrProduct}/>
    <Footer/>
  
    
  
  </div>;
}

export default Home;
