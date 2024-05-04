import AllList from "@/components/AllList";
import Head from "next/head";

export default function KeyboardsPage({ musicStore }) {
  return (
    <>
      <Head>
        <title>Keyboards</title>
      </Head>
      <AllList store={musicStore.keyboards} />
    </>
  );
}
