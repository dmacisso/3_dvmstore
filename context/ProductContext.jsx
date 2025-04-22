'use client';

import { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export default function ProductsProvider(props) {
  const { children } = props;
  const [cart, setCart] = useState({});

  //* handler functions
  function handleIncrementProduct(price_id, num) {
    const newCart = {
      //* cart, a "state" value, is immutable so spread it out and create a duplicate.
      ...cart,
    };
    if (price_id in cart) {
      //* if product is already in the cart, so increment/decrement by num
      newCart[price_id] = newCart[price_id] + num;
    } else {
      //* if product is not in cart; add it to cart with quantity of num
      newCart[price_id] = num;
    }

    //* if user set num to 0; thus newCart[price_id] === 0, so remove product form the cart
    if (newCart[price_id] === 0) {
      delete newCart[price_id];
    }

    //* overwrite cart with newCart object, i.e update the global state of the cart
    setCart(newCart);
  }

  const value = {
    cart,
    handleIncrementProduct,
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
