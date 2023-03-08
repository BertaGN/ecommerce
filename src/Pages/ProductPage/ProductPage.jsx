import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import ProductContext from '../../Context/ProductContext/ProductContext';
import "./ProductPage.css";


function ProductPage () {
  const {currentProduct, cart, setCart} = useContext(ProductContext)
  const {name, url, price} = currentProduct
    const navigate = useNavigate();
      
    const clickHandler = () => {
        navigate('/', {replace: true});
    }

    const addProduct = () => {
     setCart([...cart, currentProduct])
    }

  return (
    <div>
      <Navbar/>
      <div className='productPage-grid'>
        <img className="img-product-page" src = {url} alt=""></img>
    <div>
        <p>{name}</p>
        <p>{price}</p>
    </div>
    <button onClick={addProduct}>Add</button>

    </div>
        <button onClick={clickHandler}>Back</button>	
    </div>
  )
}


export default ProductPage;

