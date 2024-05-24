import AllList from "@/components/AllList";
import Head from "next/head";

export default function GuitarPage(props) {
  
  return (
    <>
      <Head>
        <title>Guitars</title>
      </Head>
      <AllList store={props.musicStore.guitars} cart={ props.cart } onItemSubmit={props.onItemSubmit} setCount={props.setCount} onItemRemove={props.onItemRemove} />
    </>
  );
}
