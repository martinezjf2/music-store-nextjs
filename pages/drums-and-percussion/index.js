import AllList from "@/components/AllList";
import Head from "next/head";

export default function DrumsPage({ musicStore }) {
  return (
    <>
      <Head>
        <title>Drums and Percussion</title>
      </Head>
      <AllList store={musicStore.drums_and_percussion} />
    </>
  );
}
