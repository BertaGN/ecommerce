import React, {useState} from 'react';
import { Footer } from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { ProductList } from '../../components/ProductList/ProductList';


function Home() {
    const [setCurrProduct] = useState([])
  return <div>
    <Navbar/>
    <ProductList setCurrProduct={setCurrProduct}/>
    <Footer/>
  
    
  
  </div>;
}

export default Home;
