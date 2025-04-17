'use client';

import { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export default function ProductsProvider(props) {
  const { children } = props;
  const [cart, setCart] = useState(['hi']);

  //* handler functions
  function handleAddProducts() {}

  function handleDeleteProductions() {}

  const value = {
    cart,
    handleAddProducts,
    handleAddProducts,
  };

  return (
    <>
      <ProductContext.Provider value={value}>
        {children}
      </ProductContext.Provider>
    </>
  );
}

export const useProducts = () => useContext(ProductContext);
