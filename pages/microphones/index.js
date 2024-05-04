import AllList from "@/components/AllList";
import Head from "next/head";

export default function MicrophonesPage({ musicStore }) {
  return (
    <>
      <Head>
        <title>Microphones</title>
      </Head>
      <AllList store={musicStore.microphones} />
    </>
  );
}
