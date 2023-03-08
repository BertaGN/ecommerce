import React, { useContext } from 'react'
import { Card } from '../Card/Card'
import ProductContext from '../../Context/ProductContext/ProductContext';
import { useNavigate } from 'react-router-dom';




export const ProductItem = ({product}) => {
  const {currentProduct, setCurrentProduct, cart, setCart } = useContext(ProductContext)
  const {name, price, url} = product
  const navigate = useNavigate();
  
    
    const showProduct = () => {
      setCurrentProduct(product)
      navigate('/product')
    }
    const addProduct = () => {
      setCart([...cart, product])
    }

  return (
    <Card>
        <img className="img-grid" src = {url} alt =" " onClick={showProduct}></img>
        <p>{name}</p>
        <p>{price}</p>
        <button onClick={addProduct}>Add</button>
        <button>Remove</button>
    </Card>
  )
}









