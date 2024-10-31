import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const router = useRouter();
  const [cart, setCart] = useState([]); // Start with an empty array
  const [isClient, setIsClient] = useState(false); // Track if it's client-side

  // Load cart from local storage only on client mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    setIsClient(true); // Set to true when the component mounts
  }, []);

  // Effect to sync cart with local storage
  useEffect(() => {
    if (isClient) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isClient]); // Sync cart to localStorage whenever cart changes

  const updateCart = (newCart) => {
    setCart(newCart);
    // localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const addItemToCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, item];
      updateCart(updatedCart);
      return updatedCart; // Return new cart state
    });
    setTimeout(() => {
      router.push("/checkout").then(() => router.reload());
    }, 1000);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price), 0);
  };

  const removeItemFromCart = (itemToRemove) => {
    setCart((prevCart) => {
      const newCart = prevCart.filter(
        (item) => item.name !== itemToRemove.name
      );
      return newCart; // Return new cart state
    });
  };

  if (!isClient) {
    return null; // Wait for client-side rendering
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        updateCart,
        calculateTotal,
        removeItemFromCart,
        addItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
