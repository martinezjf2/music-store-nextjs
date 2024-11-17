import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function GearExchange() {
  return (
    <section className="bg-gray-100 shadow-lg">
      <div className="flex flex-wrap md:w-[80%] md:mx-[50px] pt-5 pb-5 lg:mx-[100px]">
        {/* Left Section */}
        <div className="border-b-2 md:border-b-0 md:border-r-2 pt-3 px-5 relative w-full md:w-1/3 pb-6">
          <div className="text-[24px] font-bold tracking-wider leading-none">
            GEAR
          </div>
          <div className="leading-none tracking-widest text-[14px] font-semibold">
            EXCHANGE
          </div>
          <div className="pt-2 text-[11px] pr-2">
            Turn your old gear into new gear with the GuitarStore Gear Exchange!
          </div>
          <div className="text-[12px] absolute bottom-1 md:static mt-4 md:mt-0">
            <Link href="/">
              Take me there <span>{">"}</span>
            </Link>
          </div>
        </div>

        {/* Middle Section */}
        <div className="py-3 px-4 relative w-full md:w-1/3">
          <div className="font-bold text-[17px]">SIGN UP FOR EMAIL OFFERS!</div>
          <div className="text-[11px]">
            Exclusive deals, delivered straight to your inbox.
          </div>
          <div className="flex mt-4">
            <input
              type="text"
              placeholder="Enter your email address"
              className="px-2 py-1 text-[12px] w-full border-gray-200 border"
            />
            <button className="text-[11px] rounded-sm text-white bg-[#0273ba] py-[.45rem] px-[.6rem]">
              Subscribe
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="border-t-2 md:border-t-0 md:border-l-2 py-3 px-5 relative w-full md:w-1/3">
          <div className="font-bold text-[17px]">SPECIAL FINANCING!</div>
          <div className="text-[12px] font-light relative mt-2 md:mt-0 pr-9">
            Now is the perfect time to get the gear you want with simple,
            promotional financing.
            <Image
              src="https://media.sweetwater.com/api/i/q-60__w-180/resources/sweetwater-synchrony-card.png"
              className="absolute md:-right-28 md:-top-3 w-[150px] hidden md:block"
              width={200}
              height={200}
              alt="synchrony card"
            />
          </div>
          <div className="absolute bottom-0 md:static mt-4 md:mt-0 text-[12px]">
            <Link href="/">
              Take me there <span>{">"}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
