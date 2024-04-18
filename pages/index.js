import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import SecondNavbar from "@/components/SecondNavbar";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <SecondNavbar />
      <Header />
    </>
  );
}
