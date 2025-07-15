import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    setCart(prev => [...prev, item]);
    setTotal(prev => prev + item.price);
  };

  return (
    <CartContext.Provider value={{ cart, total, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
