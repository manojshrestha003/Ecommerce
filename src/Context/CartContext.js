// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // This function adds a product to the cart.
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Optionally check if product exists in the cart and update its quantity.
      return [...prevItems, product];
    });
    // You can also show a notification or redirect the user here.
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
