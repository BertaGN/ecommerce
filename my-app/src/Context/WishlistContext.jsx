import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const WishlistContext= createContext();

export const WishlistProvider = ({children}) => {
    const [wishlist, setWishlist] = useState([])    
  return (
   <WishlistContext.Provider value={{wishlist, setWishlist}}>
     {children}
   </WishlistContext.Provider>
  )
}


export default WishlistContext;
