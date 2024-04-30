import AllList from "@/components/AllList";
import Head from "next/head";

export default function GuitarPage({musicStore}) {
  return (
    <>
      <Head>
        <title>Guitars</title>
      </Head>
          <AllList store={ musicStore.guitars } />
    </>
  );
}
