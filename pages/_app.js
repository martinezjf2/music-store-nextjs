import HomePage from "@/components/pages/HomePage";
import "@/styles/scss/styles.scss";
import { musicStore } from "@/components/data";
import "@fortawesome/fontawesome-free/css/all.min.css";



export default function App({ Component, pageProps }) {
  return (
    <>
      <HomePage>
        <Component {...pageProps} musicStore={ musicStore} />
      </HomePage>
    </>
  );
}
