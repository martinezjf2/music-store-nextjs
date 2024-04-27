import AllList from "@/components/AllList";
import Head from "next/head";
import { musicStore } from "@/components/data";

export default function GuitarPage() {
  return (
    <>
      <Head>
        <title>Guitars</title>
      </Head>
          <AllList store={ musicStore.guitars } />
    </>
  );
}
