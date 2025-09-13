import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Add to cart
  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  // Remove item (optional)
  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  // Calculate total price
  const getTotal = () => {
    return cart.reduce((sum, item) => sum + parseInt(item.price.replace("₹", "")), 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
