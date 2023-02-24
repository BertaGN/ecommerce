import React, { useContext } from 'react'
import { Card } from '../Card/Card'
import ProductContext from '../../Context/ProductContext/ProductContext';
import { useNavigate } from 'react-router-dom';




export const ProductItem = ({product, setCount, count}) => {
  const {currentProduct, setCurrentProduct } = useContext(ProductContext)
  const {name, price, url} = product
  const navigate = useNavigate();
  const addProduct = () => {
    setCount( count +1)
  }
  
  const dCount = () => {
    if (count >0 ){
      setCount ( count -1)
    }}
    
    const showProduct = () => {
      setCurrentProduct(product)
      navigate('/product')
    }

  return (
    <Card>
        <img className="img-grid" src = {url} alt =" " onClick={showProduct}></img>
        <p>{name}</p>
        <p>{price}</p>
        <button onClick={addProduct}>Add</button>
        <button onClick={dCount}>Remove</button>
    </Card>
  )
}









