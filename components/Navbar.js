import React from "react";


export default function Navbar() {
    return (
      <div className="p-[10px] flex justify-around items-center bg-gray-100 shadow">
        <div className="w-2/12 pl-7 ">LOGO</div>

        <div className="w-7/12">
          <div className="relative">
            <i className="absolute fa-magnifying-glass top-1 left-1 ml-2"></i>
            <input
              className="flex w-[95%] bg-gray-200 pl-[2.0rem] rounded h-8 text-sm text-[12px]"
              type="text"
              placeholder="Search for sweet gear"
            />
          </div>
        </div>

        <div className="w-2/12">
          <div className="text-blue-500 font-semibold p-0 relative">
            (800) 222-4700
            <span className="text-[10px] flex justify-items-start">
              Talk to an expert!
            </span>
          </div>
        </div>

        <div className="w-2/12 relative">
          <div className="font-semibold text-[13px]">
            Contact Us
            <span className="text-[10px] flex justify-items-start items-center">
              We're here to help
            </span>
          </div>
        </div>

        <div className="w-2/12 relative">
          <div className="font-semibold text-[13px]">
            Account
            {/* <span className="text-[10px] flex">Arrow Down</span> */}
          </div>
        </div>

        <div className="w-2/12 relative">
          <div className="font-semibold text-[13px]">
            Account
            {/* <span className="text-[10px] flex">Arrow Down</span> */}
          </div>
        </div>

        
      </div>
    );
}