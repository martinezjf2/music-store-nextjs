// components/context/StateContext.js
import React, { createContext, useContext, useState } from "react";
import { musicStore } from "@/components/data"; // Import your data here

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [wishlist, setWishList] = useState([]);

  return (
    <StateContext.Provider
      value={{ count, setCount, wishlist, setWishList, musicStore }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useAppState = () => useContext(StateContext);
