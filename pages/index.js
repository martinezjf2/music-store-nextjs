import Image from "next/image";
import { Inter } from "next/font/google";
import HomePage from "@/components/pages/HomePage";
import Header from "@/components/Header";
import PopularCategories from "@/components/PopularCategories";
import GetMore from "@/components/GetMore";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    
    <HomePage>
      <Header />
      <GetMore />
      <PopularCategories />
    </HomePage>
  );
}
