import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import SecondNavbar from "@/components/SecondNavbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <SecondNavbar />
    </>
  );
}
