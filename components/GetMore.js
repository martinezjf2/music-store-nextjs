import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faHeadset,
  faGuitar,
  faPhone,
  faMedal,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

export default function GetMore() {
  return (
    <div className="text-center py-6 relative bg-white">
      <div className="text-[24px] md:text-[30px] font-semibold tracking-wide">
        Get More at GuitarStore
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:w-[80%] m-auto pt-10">
        {/* Card Component */}
        {[
          {
            icon: faHeadset,
            title: "Dedicated Sales Engineer",
            description: "Helping you buy music gear with confidence.",
          },
          {
            icon: faGuitar,
            title: "55-point Guitar Inspection",
            description: "Guitar perfection right out of the box.",
          },
          {
            icon: faTruckFast,
            title: "Fast, FREE Shipping",
            description: "Even on the small stuff.",
          },
          {
            icon: faPhone,
            title: "FREE Sweetwater Support",
            description: "Got a question? We’re here to help.",
          },
          {
            icon: faMedal,
            title: "FREE 2-year Warranty",
            description: "Buy with confidence.",
          },
          {
            icon: faCreditCard,
            title: "Easy Payments",
            description: "Up to 48 Months.",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="border relative rounded pt-3 px-4 pb-12 mb-4 border-gray-200 cursor-pointer hover:border-blue-700 hover:shadow-lg hover:scale-105 transition-transform duration-200 flex flex-col items-center"
          >
            <div className="relative -top-10">
              <div className="w-[55px] h-[55px] border-gray-200 border bg-white rounded-full flex justify-center items-center hover:border-blue-700 hover:shadow-lg hover:scale-105 transition-transform duration-200">
                <FontAwesomeIcon icon={card.icon} className="text-lg" />
              </div>
            </div>
            <div className="text-[12px] text-[#0273ba] font-semibold ">
              {card.title}
            </div>
            <div className="text-[10px] text-gray-600 text-center mt-1">
              {card.description}
            </div>
            <div className="text-[#0273ba] text-[10px] font-bold mt-4 absolute bottom-2">
              Learn More
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
