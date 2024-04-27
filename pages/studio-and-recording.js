import AllList from "@/components/AllList";
import Head from "next/head";
import { musicStore } from "@/components/data";

export default function StudioPage() {
  return (
    <>
      <Head>
        <title>Guitars</title>
      </Head>
      <AllList store={musicStore.studio_and_recording} />
    </>
  );
}
