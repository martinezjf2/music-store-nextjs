import HomePage from "@/components/pages/HomePage";
import "@/styles/scss/styles.scss";
import { musicStore } from "@/components/data";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState } from "react"
// import { CartProvider } from '../context/CartContext';



export default function App({ Component, pageProps }) {
  const [count, setCount] = useState(0)
  const [wishlist, setWishList] = useState([])

  // Make the necessary functions that are needed to remove and add items to the wishlist and to the cart.
  



  return (
    
      // <CartProvider>
        <HomePage count={count}>
          <Component
            {...pageProps}
            musicStore={musicStore}
            setCount={setCount}
          />
        </HomePage>
      // </CartProvider>
    
  );
}
