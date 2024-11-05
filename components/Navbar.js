import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Navbar({ count }) {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactFormOpen(true);
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex justify-center items-center bg-white shadow">
        <div className="w-2/12 px-9 flex justify-center items-center cursor-pointer container">
          <div className="relative z-2 font-bold text-[20px] text-[#0273ba] tracking-wider text-stroke">
            <Link href="/">GuitarStore</Link>
          </div>
        </div>

        <div className="w-7/12">
          <div className="relative">
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

        <div
          onClick={handleContactClick}
          className="w-2/12 flex justify-center items-center hover:bg-gray-100 hover:text-blue-500 px-4 py-4 cursor-pointer"
        >
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
          <div className="font-semibold text-[13px]">Wishlist</div>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-[10px] pl-2 pb-1"
          />
        </div>

        <div className="w-1/12 flex justify-center items-center hover:bg-gray-100 hover:text-blue-500 px-4 py-5 cursor-pointer">
          <Link href="/checkout">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-[25px] text-[#3b7d1b]"
            />
          </Link>
        </div>
      </div>

      {isContactFormOpen && <ContactForm onClose={closeContactForm} />}
    </div>
  );
}
