import HomePage from "@/components/pages/HomePage";
import "@/styles/scss/styles.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <HomePage>
        <Component {...pageProps} />
      </HomePage>
    </>
  );
}
