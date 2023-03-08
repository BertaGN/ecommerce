import React, { useContext } from 'react'
import ProductContext from '../../Context/ProductContext/ProductContext';
import "./TotalCart.css";

export const TotalCart = () => {
    const { cart, setCart } = useContext(ProductContext)
    console.log(cart)

    const removeItem = (product) => {
        const notRemovedProducts = cart.filter((prd) => {
            return product.id !== prd.id
        })
        setCart(notRemovedProducts)
    }

    return (
        <div>
            {
                cart.map((product) => {
                    const { name, category, price, url } = product
                    return (
                        <div>
                            <p>{name}</p>
                            <p>{category}</p>
                            <p>{price}</p>
                            <img src={url} alt="" />
                            <button onClick={() => removeItem(product)}>Remove</button>
                        </div>
                    )
                })
            }


        </div>
    )
}

