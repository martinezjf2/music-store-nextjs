import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-wrap lg:flex-nowrap w-[90%] lg:w-[80%] mx-auto my-5 gap-4">
      {/* Left Section */}
      <div className="relative bg-black text-white h-[20rem] lg:w-8/12 md:w-full sm:w-full w-full py-11 px-6 md:px-8 lg:px-9 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black z-10"></div>
        <Link href="/">
          <Image
            src="https://www.hollywoodreporter.com/wp-content/uploads/2017/08/gettyimages-687020126_-_h_2017_0.jpg?w=1296"
            alt="Electric Guitar Month"
            width={200}
            height={200}
            className="absolute w-full -top-6 left-0"
          />
        </Link>
        <div className="z-20 relative">
          <div className="font-bold text-[28px] sm:text-[36px] md:text-[40px] lg:text-[48px] mb-2">
            Electric Guitar Month
          </div>
          <div className="text-[14px] sm:text-[16px] md:text-[18px] font-light">
            Deals, Special Financing, New Gear & More
          </div>
          <div className="mt-4 sm:mt-6">
            <button className="bg-red-600 py-2 px-6 sm:py-2 sm:px-8 rounded font-semibold text-[12px] sm:text-[13px] md:text-[14px]">
              Shop Now
            </button>
            <span className="ml-4 text-[12px] sm:text-[14px] md:text-[16px] font-semibold">
              Ends November 30
            </span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-white text-[#0273ba] lg:w-4/12 md:w-full sm:w-full w-full text-center border-[#0273ba] border-2 relative h-[20rem] overflow-hidden">
        <div className="py-6 px-4">
          <div className="text-[48px] sm:text-[60px] md:text-[70px] font-extrabold leading-none">
            0
            <span className="text-[20px] sm:text-[24px] md:text-[30px]">%</span>
          </div>
          <div className="font-extrabold text-[32px] sm:text-[36px] md:text-[44px] leading-none">
            INTEREST
          </div>
          <div className="font-extrabold text-[18px] sm:text-[22px] md:text-[24px] leading-none">
            FOR 48 MONTHS
          </div>
          <div className="text-[12px] sm:text-[14px] md:text-[16px] mt-2 leading-tight">
            On qualifying products, 48 equal monthly payments required.
            Now-November 30.
          </div>
        </div>
        <div className="bg-[#177fc0] bg-gradient-to-r from-[#4fa8df] to-[#0068a8] h-[5.4rem] flex justify-center items-center sm:py-[66px] md:py-[60px] lg:py-[45px]">
          <button className="bg-white py-2 px-6 sm:py-2 sm:px-8 text-[12px] sm:text-[13px] md:text-[14px] rounded font-semibold">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
