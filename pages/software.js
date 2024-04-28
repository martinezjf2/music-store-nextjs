import AllList from "@/components/AllList";
import Head from "next/head";

export default function SoftwarePage({ musicStore }) {
  return (
    <>
      <Head>
        <title>Software</title>
      </Head>
      <AllList store={musicStore.software} />
    </>
  );
}
