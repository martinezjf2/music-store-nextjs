import AllList from "@/components/AllList";
import Head from "next/head";

export default function LightsPage({ musicStore }) {
  return (
    <>
      <Head>
        <title>Live Sound and Lights</title>
      </Head>
      <AllList store={musicStore.sound} />
    </>
  );
}
