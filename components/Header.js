import React from "react";

export default function Header() {
  return (
    <div className="flex w-[80%] mx-auto my-4">
      <div className="bg-black text-white h-[18rem] w-8/12 py-11 px-5 relative container">
        <div className="font-bold text-[48px] mb-1">Electric Guitar Month</div>
        <div className="text-[18px] font-light">
          Deals, Special Financing, New Gear & More
        </div>
        <div className="absolute bottom-7">
          <button className="bg-red-600 py-1.5 px-8 rounded font-semibold text-[13px]">
            Shop Now
          </button>
          <span className="ml-6 font-semibold">Ends April 30</span>
        </div>
      </div>

      <div className="bg-white text-blue-700 w-4/12 text-center  border-blue-500 border-2 ml-3 relative h-[18rem]">
        <div className="py-3 px-4">
          <div className="text-[70px] font-extrabold leading-none">
            0<span className="text-[30px]">%</span>
          </div>
          <div className="font-bold text-[46px] leading-none">INTEREST</div>
          <div className="font-bold text-[24px] leading-none">
            FOR 48 MONTHS
          </div>
          <div className="leading-tight text-[14px] mt-1">
            On qualifying products, 48 equal monthly payments required.
            Now-April 30.
          </div>
        </div>
        <div className="bg-blue-400 h-[5.2rem] leading-none">
          <div className="">
            <button className="mt-4 bg-white py-2 px-8 text-[13px] rounded font-semibold">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
