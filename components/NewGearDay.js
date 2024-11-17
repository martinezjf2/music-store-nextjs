import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NewGearDay() {
  return (
    <section className="hidden lg:block relative bg-repeat bg-fixed bg-[url('https://media.sweetwater.com/m/include/footer/images/new-gear-day/gear-pattern-optimized-700x700.png?format=webp')] overflow-hidden">
      <div className="h-[170px] bg-[#07629c] bg-opacity-95 w-full flex justify-center items-center">
        {/* Left Images */}
        <div className="flex justify-center items-center p-7">
          {[
            "https://media.sweetwater.com/m/include/footer/images/new-gear-day/10.jpg?format=webp",
            "https://media.sweetwater.com/m/include/footer/images/new-gear-day/18.jpg?format=webp",
            "https://media.sweetwater.com/m/include/footer/images/new-gear-day/19.jpg?format=webp",
          ].map((src, index) => (
            <div
              key={index}
              className="bg-gray-200 hover:opacity-100 opacity-85 hover:scale-110 hover:duration-200 h-[120px] w-[135px] border-blue-500 border-4 rounded-full relative overflow-hidden mr-3"
            >
              <Image
                src={src}
                className="w-full m-auto"
                width={200}
                height={200}
                alt={`new gear day image ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Center Text */}
        <div className="relative text-center px-4 py-6">
          <div className="text-3xl text-white tracking-wide font-light">
            Happy
          </div>
          <div className="relative">
            <div className="text-white text-[30px] leading-none font-extrabold tracking-wider">
              <span className="text-[20px]">#</span>NewGearDay
            </div>
            <div className="text-white text-[14px] w-4/5 mx-auto">
              Happy customers, one piece of gear at a time!
            </div>
            <div className="text-center mt-2">
              <Link href="/" className="text-white hover:underline">
                Learn More about New Gear Day.
              </Link>
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div className="flex justify-center items-center p-7">
          {[
            "https://media.sweetwater.com/m/include/footer/images/new-gear-day/16.jpg?format=webp",
            "https://media.sweetwater.com/m/include/footer/images/new-gear-day/6.jpg?format=webp",
            "https://media.sweetwater.com/m/include/footer/images/new-gear-day/3.jpg?format=webp",
          ].map((src, index) => (
            <div
              key={index}
              className="bg-gray-200 hover:opacity-100 opacity-85 hover:scale-110 hover:duration-200 h-[120px] w-[135px] border-blue-500 border-4 rounded-full relative overflow-hidden mr-3"
            >
              <Image
                src={src}
                className="w-full m-auto"
                width={200}
                height={200}
                alt={`new gear day image ${index + 4}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
