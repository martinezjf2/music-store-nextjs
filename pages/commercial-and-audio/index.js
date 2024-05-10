import AllList from "@/components/AllList";
import Head from "next/head";

export default function CommercialPage({ musicStore }) {
  return (
    <>
      <Head>
        <title>Commercial</title>
      </Head>
      <AllList store={musicStore.commercial_and_audio} />
    </>
  );
}
