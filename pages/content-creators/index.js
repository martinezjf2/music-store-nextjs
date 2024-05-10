import AllList from "@/components/AllList";
import Head from "next/head";

export default function ContentPage({ musicStore }) {
  return (
    <>
      <Head>
        <title>Content Creators</title>
      </Head>
      <AllList store={musicStore.content_creators} />
    </>
  );
}
