import React from "react";
import { createContext, useState } from "react";


export const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
    const [currentProduct, setCurrentProduct] = useState(null)
  
  return (
    <ProductContext.Provider
      value={{
        currentProduct,
        setCurrentProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;


