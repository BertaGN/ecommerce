import React, { useContext } from 'react'
import ProductContext from '../../Context/ProductContext/ProductContext';
import Navbar from '../../components/Navbar/Navbar';
import "./TotalCart.css";
import { useNavigate } from 'react-router-dom';

export const TotalCart = () => {
    const { cart, setCart } = useContext(ProductContext)
    console.log(cart)
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate('/product', { replace: true });
    }

    const removeItem = (product) => {
        if (product.qty === 1) {
            const notRemovedProducts = cart.filter((prd) => {
                return product.id !== prd.id
            })
            setCart(notRemovedProducts)
        } else {
            const productsAfterRemove = cart.map((prd) => {
                return product.id !== prd.id ? prd : { ...prd, qty: prd.qty - 1 }
            })
            setCart(productsAfterRemove)
        }
    }

    return (
        <div>
            <Navbar />
            <button onClick={clickHandler}>Back</button>
            {
                cart.map((product) => {
                    const { name, category, price, url, qty } = product
                    return (
                        <div>
                            <p>{name}</p>
                            <p>{category}</p>
                            <p>{price}</p>
                            <img src={url} alt="" />
                            <p>{qty}</p>
                            <button onClick={() => removeItem(product)}>Remove</button>
                        </div>
                    )
                })
            }


        </div>
    )
}

