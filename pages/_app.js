import HomePage from "@/components/pages/HomePage";
import "@/styles/scss/styles.scss";
import { musicStore } from "@/components/data";


export default function App({ Component, pageProps }) {
  return (
    <>
      <HomePage>
        <Component {...pageProps} musicStore={ musicStore} />
      </HomePage>
    </>
  );
}
