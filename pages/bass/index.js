import AllList from "@/components/AllList";
import Head from "next/head";

export default function BassPage({ musicStore }) {
  
  return (
    <>
      <Head>
        <title>Bass</title>
      </Head>
      <AllList store={musicStore.bass} />
    </>
  );
}
