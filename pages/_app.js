import HomePage from "@/components/pages/HomePage";
import "@/styles/scss/styles.scss";
import { musicStore } from "@/components/data";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, {useState} from "react"



export default function App({ Component, pageProps }) {
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState([])
  const [wishlist, setWishList] = useState([])
  
  return (
    <>
      <HomePage count={count}>
        <Component {...pageProps} musicStore={musicStore} />
      </HomePage>
    </>
  );
}
