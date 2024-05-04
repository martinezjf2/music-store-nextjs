import AllList from "@/components/AllList";
import Head from "next/head";

export default function AccessoriesPage({ musicStore }) {
  return (
    <>
      <Head>
        <title>Accessories</title>
      </Head>
      <AllList store={musicStore.accessories} />
    </>
  );
}
