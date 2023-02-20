import React from 'react'
import { ProductItem } from './ProductItem'
import { products } from '../../data/data.js'
import "./Product.css";


export const ProductList = ({setCount, count, setCurrProduct}) => {
  return (
    <div>
    {
    products.map((product) => {
        console.log(products)
        return <ProductItem className="product-grid" product = {product} setCount = {setCount} count ={count} setCurrProduct = {setCurrProduct}/>;

    })
}
    
    </div>
    
)
}
