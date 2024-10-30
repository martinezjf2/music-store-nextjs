// pages/guitars/index.js
import AllList from "@/components/AllList";
import Head from "next/head";
import { useAppState } from "@/context/StateContext";

export default function GuitarPage() {
  const { musicStore, count, setCount } = useAppState();

  return (
    <>
      <Head>
        <title>Guitars</title>
      </Head>
      <AllList
        store={musicStore.keyboards}
        cart={[]} // Replace with the cart state if needed
        onItemSubmit={() => {}} // Add your actual function here
        setCount={setCount}
        onItemRemove={() => {}} // Add your actual function here
      />
    </>
  );
}
