import AllList from "@/components/AllList";
import Head from "next/head";

export default function BandOrchestraPage({ musicStore }) {
  return (
    <>
      <Head>
        <title>Band & Orchestra</title>
      </Head>
      <AllList store={musicStore.band} />
    </>
  );
}
