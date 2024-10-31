import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function SecondNavbar() {
  return (
    <div className="flex justify-center shadow ">
      <div className="text-[12px] font-medium py-2 px-9 hover:bg-gray-100 hover:text-blue-500 cursor-pointer flex">
        Shop By Category
        <FontAwesomeIcon
          icon={faChevronDown}
          className=" ml-2 mt-1 text-[10px]"
        />
      </div>
      <div className="text-[12px] font-medium py-2 px-9 hover:bg-gray-100 hover:text-blue-500 cursor-pointer flex">
        What&lsquo;s New
      </div>
      <div className="text-[12px] font-medium py-2 px-9 hover:bg-gray-100 hover:text-blue-500 cursor-pointer flex">
        Deals
        <FontAwesomeIcon
          icon={faChevronDown}
          className=" ml-2 mt-1 text-[10px]"
        />
      </div>
      <div className="text-[12px] font-medium py-2 px-9 hover:bg-gray-100 hover:text-blue-500 cursor-pointer flex">
        Used Gear
        <FontAwesomeIcon
          icon={faChevronDown}
          className=" ml-2 mt-1 text-[10px]"
        />
      </div>
      <div className="text-[12px] font-medium py-2 px-9 hover:bg-gray-100 hover:text-blue-500 cursor-pointer flex">
        Rentals
      </div>
      <div className="text-[12px] font-medium py-2 px-9 hover:bg-gray-100 hover:text-blue-500 cursor-pointer flex">
        Articles & Videos
      </div>
      <div className="text-[12px] font-medium py-2 px-9 hover:bg-gray-100 hover:text-blue-500 cursor-pointer flex">
        Giveaway
      </div>
      <div className="text-[12px] font-medium py-2 px-9 hover:bg-gray-100 hover:text-blue-500 cursor-pointer flex">
        Music Store Card
      </div>
    </div>
  );
}
