// pages/index.js
import Image from "next/image";
import { Inter } from "next/font/google";
// import HomePage from "@/components/pages/HomePage";
import Header from "@/components/Header";
import PopularCategories from "@/components/PopularCategories";
import GetMore from "@/components/GetMore";
import Head from "next/head";
import { useAppState } from "@/context/StateContext";
import Layout from "@/components/pages/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { count, setCount } = useAppState(); // Access count and setCount from context

  return (
    <>
      <Head>
        <title>GuitarStore - Home</title>
      </Head>
      {/* <Layout count={count}> */}
      {/* Now all components are wrapped within HomePage */}
      <Header />
      <GetMore />
      <PopularCategories />
      {/* </Layout> */}
    </>
  );
}
