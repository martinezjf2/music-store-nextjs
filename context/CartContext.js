// CartContext.js
import { useEffect, useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState([]);

  // Function to update the cart state
  const updateCart = (newCart) => {
    setCart(newCart);
    // Update cart data in localStorage
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (deletedItem) => {
    const updatedCart = cart.filter((item) => item.name !== deletedItem.name);
    updateCart(updatedCart);
  };
    
const calculateTotal = () => {
  return cart.reduce((total, item) => total + parseFloat(item.price), 0);
};

  useEffect(() => {
    // Retrieve cart data from localStorage when component mounts
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return { cart, updateCart, removeItemFromCart, calculateTotal };
};
