import AllList from "@/components/AllList";
import Head from "next/head";

export default function HomeAudioPage({ musicStore }) {
  return (
    <>
      <Head>
        <title>Home Audio</title>
      </Head>
      <AllList store={musicStore.home_audio} />
    </>
  );
}
