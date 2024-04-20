import React from "react";

export default function Header() {
  return (
    <div className="flex w-[80%] mx-auto my-5">
      <div className="relative bg-black text-white h-[18rem] w-8/12 py-11 px-9 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black z-15"></div>
        <a href="/"><img
          src="https://www.hollywoodreporter.com/wp-content/uploads/2017/08/gettyimages-687020126_-_h_2017_0.jpg?w=1296"
          className="absolute w-full -top-6 left-0"
        /></a>
        <div className="z-20 relative">
          <div className="font-bold text-[48px] mb-1">
            Electric Guitar Month
          </div>
          <div className="text-[18px] font-light">
            Deals, Special Financing, New Gear & More
          </div>
          <div className="absolute -bottom-3/4 ">
            <button className="bg-red-600 py-1.5 px-8 rounded font-semibold text-[13px]">
              Shop Now
            </button>
            <span className="ml-6 font-semibold">Ends April 30</span>
          </div>
        </div>
      </div>

      <div className="bg-white text-[#0273ba] w-4/12 text-center  border-[#0273ba] border-2 ml-3 relative h-[18rem]">
        <div className="py-3 px-4">
          <div className="text-[70px] font-extrabold leading-none">
            0<span className="text-[30px]">%</span>
          </div>
          <div className="font-extrabold text-[44px] leading-none">INTEREST</div>
          <div className="font-extrabold text-[24px] leading-none">
            FOR 48 MONTHS
          </div>
          <div className="leading-tight text-[14px] mt-1">
            On qualifying products, 48 equal monthly payments required.
            Now-April 30.
          </div>
        </div>
        <div className="bg-[#0273ba] h-[5.4rem] leading-none">
          <div className="">
            <button className="mt-6 bg-white py-2 px-8 text-[13px] rounded font-semibold">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
