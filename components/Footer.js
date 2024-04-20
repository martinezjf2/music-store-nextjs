// Include the New Gear Day, Subscriptions. and the footer

import React from "react";

export default function Footer() {
  return (
    <section className=" relative overflow-hidden bg-[#07629c] bg-opacity-150">
      <div className="bg-[url(https://media.sweetwater.com/m/include/footer/images/new-gear-day/gear-pattern-optimized-700x700.png?format=webp)] h-[170px] w-full  bg-fixed bg-contain flex justify-center items-center">
        <div className="flex justify-center items-center p-7">
          <div className="bg-gray-200 hover:opacity-100 opacity-85 hover:scale-110 hover:duration-200 h-[120px] w-[120px] border-blue-500 border-4 rounded-full relative overflow-hidden mr-3">
            <img
              src="https://media.sweetwater.com/m/include/footer/images/new-gear-day/10.jpg?format=webp"
              className="w-[110px] m-auto"
            />
          </div>
          <div className="bg-gray-200 hover:opacity-100 opacity-85 hover:scale-110 hover:duration-200 h-[120px] w-[120px] border-blue-500 border-4 rounded-full relative overflow-hidden mr-3">
            <img
              src="https://media.sweetwater.com/m/include/footer/images/new-gear-day/18.jpg?format=webp"
              className="w-[110px] m-auto"
            />
          </div>
          <div className="bg-gray-200 hover:opacity-100 opacity-85 hover:scale-110 hover:duration-200 h-[120px] w-[120px] border-blue-500 border-4 rounded-full relative overflow-hidden mr-3">
            <img
              src="https://media.sweetwater.com/m/include/footer/images/new-gear-day/19.jpg?format=webp"
              className="w-[110px] m-auto"
            />
          </div>
        </div>
        <div className="relative m-1/2">
          <div className="text-center text-3xl text-white tracking-wide font-light m-1/2">
            Happy
          </div>
          <div className="relative">
            <div className="text-center text-white text-[30px] relative leading-none font-extrabold tracking-wider">
              <span className="text-[20px]">#</span>NewGearDay
            </div>
            <div className="text-center text-white text-[14px] w-4/5 mx-auto">
              Happy customers, one piece of gear at a time!
            </div>

            <div className="text-center">
              <a href="#" className="text-white hover:underline">
                Learn More about New Gear Day.
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center p-7">
          <div className="bg-gray-200 hover:opacity-100 h-[120px]  opacity-85 hover:scale-110 hover:duration-200 w-[120px] border-blue-500 border-4 rounded-full relative overflow-hidden mr-3">
            <img
              src="https://media.sweetwater.com/m/include/footer/images/new-gear-day/16.jpg?format=webp"
              className="w-[110px] m-auto"
            />
          </div>
          <div className="bg-gray-200 hover:opacity-100 h-[120px]  opacity-85 hover:scale-110 hover:duration-200 w-[120px] border-blue-500 border-4 rounded-full relative overflow-hidden mr-3">
            <img
              src="https://media.sweetwater.com/m/include/footer/images/new-gear-day/6.jpg?format=webp"
              className="w-[110px] m-auto"
            />
          </div>
          <div className="bg-gray-200 hover:opacity-100 h-[120px]  opacity-85 hover:scale-110 hover:duration-200 w-[120px] border-blue-500 border-4 rounded-full relative overflow-hidden mr-3">
            <img
              src="https://media.sweetwater.com/m/include/footer/images/new-gear-day/3.jpg?format=webp"
              className="w-[110px] m-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
