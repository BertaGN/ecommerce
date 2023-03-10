import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import ProductContext from '../../Context/ProductContext/ProductContext';
import "./ProductPage.css";


function ProductPage() {
  const { currentProduct, cart, setCart } = useContext(ProductContext)
  const { name, url, price } = currentProduct
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/', { replace: true });
  }

  const addProduct = () => {
    const repeatedProduct = cart.find((prd) => {
      return prd.id === currentProduct.id
    })
    if (repeatedProduct) {
      const products = cart.map((prd) => {
        return prd.id === currentProduct.id ? {...prd, qty : prd.qty + 1} : prd
      })
    setCart(products)
    }else {
      setCart ([...cart, currentProduct])
    }
  }

  return (
    <div>
      <Navbar />
      <button onClick={clickHandler}>Back</button>
      <div className='productPage-grid'>
        <img className="img-product-page" src={url} alt=""></img>
        <div>
          <p>{name}</p>
          <p>{price}</p>
        </div>
        <div>
          <button onClick={addProduct}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}


export default ProductPage;

