// pages/_app.js
import "@/styles/scss/styles.scss"; // Import your styles
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome styles
import { StateProvider } from "@/context/StateContext"; // Import your context
import { CartProvider } from "@/context/CartContext"; // Import the CartProvider
import Layout from "@/components/pages/Layout"; // Import the Layout component
import { GoogleAnalytics } from "@next/third-parties/google";

export default function App({ Component, pageProps }) {
  return (
    <StateProvider>
      <CartProvider>
        <Layout count={pageProps.count}>
          <GoogleAnalytics gaId="G-T94Q6D7ZC3" debug />
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </StateProvider>
  );
}
