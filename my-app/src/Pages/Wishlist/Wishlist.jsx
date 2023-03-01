import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import WishlistContext from '../../Context/WishlistContext'

export const Wishlist = () => {
  const { wishlist, setWishlist } = useContext(WishlistContext)

  const removeItem = (wish) => {
    const filteredWishes = wishlist.filter((wishFromContext) => {
      return wish.id !== wishFromContext.id
    })
   setWishlist(filteredWishes)
  }
  return (
    <div>
      <Link to='/'>Home</Link>
      {
        wishlist.map((wish) => {
          return (
            <div>
              <p>{wish.name}</p>
              <img src={wish.url} />
              <button onClick={() => removeItem(wish)}>Remove Item</button>

            </div>
          )
        })
      }
    </div>
  )

}
