import React from 'react'


export const ProductItem = ({product, setCount, count, setCurrProduct}) => {
    const {name, price, url} = product
    const addProduct = () => {
        setCount( count +1)
    }
    const changeProduct = () => {
        setCurrProduct(name)
    }
  return (
    <div>
        <p>{name}</p>
        <p>{price}</p>
        <img src = {url}></img>
        <button onClick={addProduct}>Add</button>
        <button onClick={changeProduct}>Current Product</button>
    </div>
  )
}



