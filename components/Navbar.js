import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Navbar({ count }) {
  // console.log({count})
  return (
    <div className="relative">
      <div className="flex justify-center items-center bg-white shadow">
        <div className="w-2/12 px-9 flex justify-center items-center cursor-pointer container">
          <div className="relative z-2 font-bold text-[20px] text-[#0273ba] tracking-wider text-stroke">
            {/* <a href="/">GuitarStore</a> */}
            <Link href="/">GuitarStore</Link>
            {/* <div className="h-2 bottom-1 inset-2 z-1 absolute w-full bg-red-600 rounded-md"></div> */}
          </div>
        </div>

        <div className="w-7/12">
          <div className="relative">
            {/* <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute top-2 left-1 ml-2 text-sm"
              /> */}
            <input
              className="flex w-[95%] bg-gray-100 pl-[1.0rem] rounded h-8 text-sm text-[11px]"
              type="text"
              placeholder="Search for sweet gear"
            />
          </div>
        </div>

        <div className="w-2/12 flex justify-center items-center hover:bg-gray-100 hover:text-blue-500 px-4 py-3 cursor-pointer">
          <div className="text-blue-500 font-semibold p-0 relative">
            (800) 222-4700
            <span className="text-[10px] flex justify-items-start">
              Talk to an expert!
            </span>
          </div>
        </div>

        <div className="w-2/12 flex justify-center items-center hover:bg-gray-100 hover:text-blue-500 px-4 py-4 cursor-pointer">
          <div className="font-semibold text-[13px]">
            Contact Us
            <span className="text-[10px] flex justify-items-start items-center">
              We&lsquo;re here to help
            </span>
          </div>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-[10px] pl-2 pb-1"
          />
        </div>

        <div className="w-1/12 flex justify-center items-center hover:bg-gray-100 hover:text-blue-500 px-4 py-6 cursor-pointer">
          <div className="font-semibold text-[13px]">Account</div>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-[10px] pl-2 pb-1"
          />
        </div>

        <div className="w-1/12 flex justify-center items-center hover:bg-gray-100 hover:text-blue-500 px-4 py-5 cursor-pointer">
          <div className="">
            {/* <a href="/checkout" className="relative">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-[25px] text-[#3b7d1b]"
              />

              <div className="absolute -top-[6px] right-[9px] text-white text-[10px]">
                {count}
              </div> 
            </a>  */}
            <Link href="/checkout">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-[25px] text-[#3b7d1b]"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
