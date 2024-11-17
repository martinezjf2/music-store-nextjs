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
      <div className="bg-white shadow">
        {/* Large Screen Navbar */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="w-2/12 px-4 flex justify-center items-center cursor-pointer">
            <div className="font-bold text-[20px] text-[#0273ba] tracking-wider">
              <Link href="/">GuitarStore</Link>
            </div>
          </div>

          <div className="w-7/12">
            <input
              className="w-[95%] bg-gray-100 pl-[1rem] rounded h-8 text-sm"
              type="text"
              placeholder="Search for sweet gear"
            />
          </div>

          <div className="w-2/12 flex justify-center items-center px-4 py-3 cursor-pointer">
            <div className="text-blue-500 font-semibold">
              (800) 222-4700
              <span className="text-[10px] block">Talk to an expert!</span>
            </div>
          </div>

          <div
            onClick={handleContactClick}
            className="w-2/12 flex justify-center items-center px-4 py-4 cursor-pointer"
          >
            <div className="font-semibold text-[13px]">
              Contact Us
              <span className="text-[10px] block">
                We&lsquo;re here to help
              </span>
            </div>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-[10px] pl-2 pb-1"
            />
          </div>

          <div className="w-1/12 flex justify-center items-center px-4 py-6 cursor-pointer">
            <div className="font-semibold text-[13px]">Wishlist</div>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-[10px] pl-2 pb-1"
            />
          </div>

          <div className="w-1/12 flex justify-center items-center px-4 py-5 cursor-pointer">
            <Link href="/checkout">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-[25px] text-[#3b7d1b]"
              />
            </Link>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="lg:hidden flex justify-between items-center px-4 py-2">
          <div className="font-bold text-[20px] text-[#0273ba]">
            <Link href="/">GuitarStore</Link>
          </div>

          <div className="space-x-4 flex items-center">
            <button
              onClick={handleContactClick}
              className="font-semibold text-sm hover:text-blue-500"
            >
              Contact Us
            </button>
            <Link href="/checkout">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-[20px] text-[#3b7d1b]"
              />
            </Link>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden px-4 py-2">
          <input
            className="w-full bg-gray-100 pl-[1rem] rounded h-8 text-sm"
            type="text"
            placeholder="Search for sweet gear"
          />
        </div>
      </div>

      {isContactFormOpen && <ContactForm onClose={closeContactForm} />}
    </div>
  );
}
