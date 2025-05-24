import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product_id === product.product_id
      );
      if (existingItem) return prevItems;
      return [...prevItems, product];
    });
  };
  const removeFromCart = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product_id !== id)
    );
  };
  const clearCart = () => {
    setCartItems([]);
  };
  const addToWishlist = (product) => {
    setWishlistItems((prev) =>
      prev.some((item) => item.product_id === product.product_id)
        ? prev
        : [...prev, product]
    );
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.product_id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlistItems,
        addToCart,
        removeFromCart,
        clearCart,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
