import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import WishlistContext from '../../Context/WishlistContext'
import { products } from '../../data/products'


export const Home = () => {
    const {wishlist, setWishlist} = useContext(WishlistContext)

    const handleAddToWishlist = (product) => {
        setWishlist([...wishlist, product])
    }

    return (
        <div>
            <Link to='/wishlist'>Wishlist</Link>
            {
                products.map((product) => {
                    return (
                        <div>
                            <p>{product.name}</p>
                            <img src={product.url} />
                            <button onClick={()=>handleAddToWishlist(product)}>Add to Wishlist</button>

                        </div>


                    )
                })


            }
        </div>
    )
}
