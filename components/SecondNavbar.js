import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons";

export default function SecondNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="shadow">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-center">
        <div className="text-[12px] font-medium py-2 px-9 hover:bg-gray-100 hover:text-blue-500 cursor-pointer flex">
          Shop By Category
          <FontAwesomeIcon
            icon={faChevronDown}
            className="ml-2 mt-1 text-[10px]"
          />
        </div>
        <div className="text-[12px] font-medium py-2 px-9 hover:bg-gray-100 hover:text-blue-500 cursor-pointer">
          What&lsquo;s New
        </div>
        <div className="text-[12px] font-medium py-2 px-9 hover:bg-gray-100 hover:text-blue-500 cursor-pointer flex">
          Deals
          <FontAwesomeIcon
            icon={faChevronDown}
            className="ml-2 mt-1 text-[10px]"
          />
        </div>
        <div className="text-[12px] font-medium py-2 px-9 hover:bg-gray-100 hover:text-blue-500 cursor-pointer flex">
          Used Gear
          <FontAwesomeIcon
            icon={faChevronDown}
            className="ml-2 mt-1 text-[10px]"
          />
        </div>
        <div className="text-[12px] font-medium py-2 px-9 hover:bg-gray-100 hover:text-blue-500 cursor-pointer">
          Rentals
        </div>
        <div className="text-[12px] font-medium py-2 px-9 hover:bg-gray-100 hover:text-blue-500 cursor-pointer">
          Articles & Videos
        </div>
        <div className="text-[12px] font-medium py-2 px-9 hover:bg-gray-100 hover:text-blue-500 cursor-pointer">
          Giveaway
        </div>
        <div className="text-[12px] font-medium py-2 px-9 hover:bg-gray-100 hover:text-blue-500 cursor-pointer">
          Music Store Card
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex justify-between items-center px-4 py-2">
        <div className="font-medium text-[16px]">Menu</div>
        <button onClick={toggleMenu} className="text-[20px] focus:outline-none">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="text-[12px] font-medium py-2 px-4 hover:bg-gray-100 hover:text-blue-500 cursor-pointer flex justify-between">
            Shop By Category
            <FontAwesomeIcon icon={faChevronDown} className="text-[10px]" />
          </div>
          <div className="text-[12px] font-medium py-2 px-4 hover:bg-gray-100 hover:text-blue-500 cursor-pointer">
            What&lsquo;s New
          </div>
          <div className="text-[12px] font-medium py-2 px-4 hover:bg-gray-100 hover:text-blue-500 cursor-pointer flex justify-between">
            Deals
            <FontAwesomeIcon icon={faChevronDown} className="text-[10px]" />
          </div>
          <div className="text-[12px] font-medium py-2 px-4 hover:bg-gray-100 hover:text-blue-500 cursor-pointer flex justify-between">
            Used Gear
            <FontAwesomeIcon icon={faChevronDown} className="text-[10px]" />
          </div>
          <div className="text-[12px] font-medium py-2 px-4 hover:bg-gray-100 hover:text-blue-500 cursor-pointer">
            Rentals
          </div>
          <div className="text-[12px] font-medium py-2 px-4 hover:bg-gray-100 hover:text-blue-500 cursor-pointer">
            Articles & Videos
          </div>
          <div className="text-[12px] font-medium py-2 px-4 hover:bg-gray-100 hover:text-blue-500 cursor-pointer">
            Giveaway
          </div>
          <div className="text-[12px] font-medium py-2 px-4 hover:bg-gray-100 hover:text-blue-500 cursor-pointer">
            Music Store Card
          </div>
        </div>
      )}
    </div>
  );
}
