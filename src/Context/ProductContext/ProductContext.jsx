import React from "react";
import { createContext, useState } from "react";


export const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
    const [currentProduct, setCurrentProduct] = useState(null)
    const [cart, setCart] = useState([])
  
  return (
    <ProductContext.Provider
      value={{
        currentProduct,
        setCurrentProduct,
        cart,
        setCart
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;


