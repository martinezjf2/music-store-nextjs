import AllList from "@/components/AllList";
import Head from "next/head";

export default function DJPage({ musicStore }) {
  return (
    <>
      <Head>
        <title>DJ Equipment</title>
      </Head>
      <AllList store={musicStore.dj_equipment} />
    </>
  );
}
