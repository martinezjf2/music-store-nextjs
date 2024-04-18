import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faCartShopping,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";




export default function Navbar() {
    return (
      <div className="relative">
        <div className="flex justify-center items-center bg-white shadow">
          <div className="w-2/12 pl-7 flex justify-center items-center cursor-pointer">
            LOGO
          </div>

          <div className="w-7/12">
            <div className="relative">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute top-2 left-1 ml-2 text-sm" />
              <input
                className="flex w-[95%] bg-gray-100 pl-[2.0rem] rounded h-8 text-sm text-[11px]"
                type="text"
                placeholder="Search for sweet gear"
              />
            </div>
          </div>

          <div className="w-2/12 flex justify-center items-center hover:bg-gray-100 hover:text-blue-500 px-4 py-2 cursor-pointer">
            <div className="text-blue-500 font-semibold p-0 relative">
              (800) 222-4700
              <span className="text-[10px] flex justify-items-start">
                Talk to an expert!
              </span>
            </div>
          </div>

          <div className="w-2/12 flex justify-end items-center hover:bg-gray-100 hover:text-blue-500 px-4 py-3 cursor-pointer">
            <div className="font-semibold text-[13px]">
              Contact Us
              <span className="text-[10px] flex justify-items-start items-center">
                We're here to help
              </span>
            </div>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-[10px] pl-2 pb-1"
            />
          </div>

          <div className="w-1/12 flex justify-end items-center hover:bg-gray-100 hover:text-blue-500 px-4 py-5 cursor-pointer">
            <div className="font-semibold text-[13px]">Account</div>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-[10px] pl-2 pb-1"
            />
          </div>

          <div className="w-1/12 flex justify-center items-center hover:bg-gray-100 hover:text-blue-500 px-4 py-5 cursor-pointer">
            <div className="">
              <FontAwesomeIcon icon={faCartShopping} className="text-lg"/>
            </div>
          </div>
        </div>
      </div>
    );
}