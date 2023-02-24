import React from 'react'
import { ProductItem } from './ProductItem'
import { products } from '../../data/data.js'
import "./Product.css";


export const ProductList = ({setCount, count, setCurrProduct}) => {
  return (
    <div className="product-grid">
    {
    products.map((product) => {
        console.log(products)
        return <ProductItem product = {product} setCount = {setCount} count ={count} setCurrProduct = {setCurrProduct}/>;

    })
}

    </div>

)
}
