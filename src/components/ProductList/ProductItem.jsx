import React, { useContext } from 'react'
import { Card } from '../Card/Card'
import ProductContext from '../../Context/ProductContext/ProductContext';
import { useNavigate } from 'react-router-dom';




export const ProductItem = ({product}) => {
  const {setCurrentProduct} = useContext(ProductContext)
  const {name, price, url} = product
  const navigate = useNavigate();
  
    
    const showProduct = () => {
      setCurrentProduct(product)
      navigate('/product')
    }
  

  return (
    <Card>
        <img className="img-grid" src = {url} alt =" "></img>
        <p>{name}</p>
        <p>{price}</p>
        <button onClick={showProduct}>Detail Product</button>
    </Card>
  )
}









