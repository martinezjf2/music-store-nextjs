import AllList from "@/components/AllList";
import Head from "next/head";

export default function StudioPage({ musicStore }) {
  return (
    <>
      <Head>
        <title>Studio and Recording</title>
      </Head>
      <AllList store={musicStore.studio_and_recording} />
    </>
  );
}
