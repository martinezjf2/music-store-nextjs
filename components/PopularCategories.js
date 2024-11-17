import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function PopularCategories() {
  return (
    <div className="my-4 relative pb-7">
      <div className="text-center text-[28px] font-semibold p-2 tracking-wide">
        Popular Categories
      </div>

      {/* Responsive Container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 pt-6 justify-center md:px-28">
        {[
          {
            href: "/guitars",
            src: "https://media.sweetwater.com/m/home/cats/ENCTEBGH.png?format=jpg&optimize=high&auto=webp&quality=70",
            alt: "Guitars",
            label: "Guitars",
          },
          {
            href: "/studio-and-recording",
            src: "https://media.sweetwater.com/m/home/cats/Arrow-small.png?format=jpg&optimize=high&auto=webp&quality=70&width=202",
            alt: "Studio",
            label: "Studio & Recording",
          },
          {
            href: "/drums-and-percussion",
            src: "https://media.sweetwater.com/m/home/cats/LM402.png?format=jpg&optimize=high&auto=webp&quality=70&width=202",
            alt: "Drums",
            label: "Drums & Percussion",
          },
          {
            href: "/bass",
            src: "https://media.sweetwater.com/m/home/cats/PBassAPR3SB.png?format=jpg&optimize=high&auto=webp&quality=70&width=202",
            alt: "Bass",
            label: "Bass",
          },
          {
            href: "/keyboards",
            src: "https://media.sweetwater.com/m/home/cats/Matriarch.png?format=jpg&optimize=high&auto=webp&quality=70&width=202",
            alt: "Keyboards",
            label: "Keyboards & Synth",
          },
          {
            href: "/live-sound-and-lights",
            src: "https://media.sweetwater.com/m/home/cats/flow8.jpg?format=jpg&optimize=high&auto=webp&quality=70&width=202",
            alt: "Live Sound",
            label: "Live Sound & Lights",
          },
          {
            href: "/software",
            src: "https://media.sweetwater.com/m/home/cats/ptstudioann.jpg?format=jpg&optimize=high&auto=webp&quality=70&width=202",
            alt: "Software",
            label: "Software & Plug-ins",
          },
          {
            href: "/dj-equipment",
            src: "https://media.sweetwater.com/m/home/cats/ATLP120XUSBSV.png?format=jpg&optimize=high&auto=webp&quality=70&width=202",
            alt: "DJ Equipment",
            label: "DJ Equipment",
          },
          {
            href: "/microphones",
            src: "https://media.sweetwater.com/m/home/cats/SM58-cat.png?format=jpg&optimize=high&auto=webp&quality=70&width=202",
            alt: "Microphones",
            label: "Microphones",
          },
          {
            href: "/band-and-orchestra",
            src: "https://media.sweetwater.com/m/home/cats/KingSlvFlTr.png?format=jpg&optimize=high&auto=webp&quality=70&width=202",
            alt: "Band & Orchestra",
            label: "Band & Orchestra",
          },
          {
            href: "/home-audio-and-electronics",
            src: "https://media.sweetwater.com/m/home/cats/TourOneM2Bk.png?format=jpg&optimize=high&auto=webp&quality=70&width=202",
            alt: "Home Audio",
            label: "Home Audio & Electronics",
          },
          {
            href: "/commercial-audio-and-install",
            src: "https://media.sweetwater.com/m/home/cats/Control28.png?format=jpg&optimize=high&auto=webp&quality=70&width=202",
            alt: "Commercial",
            label: "Commercial Audio & Install",
          },
          {
            href: "/accessories",
            src: "https://media.sweetwater.com/m/home/cats/M4WP006.png?format=jpg&optimize=high&auto=webp&quality=70&width=202",
            alt: "Accessories",
            label: "Accessories",
          },
          {
            href: "/content-creators",
            src: "https://media.sweetwater.com/m/home/cats/PodMic.png?format=jpg&optimize=high&auto=webp&quality=70&width=202",
            alt: "Content Creators",
            label: "Content Creators",
          },
        ].map((category, index) => (
          <Link href={category.href} key={index}>
            <div className="hover:text-blue-700">
              <div className="flex justify-center items-center">
                <div className="bg-gray-100 w-[100px] h-[100px] rounded-full flex justify-center items-center hover:border-blue-700 hover:border object-fill hover:duration-100 hover:bg-white">
                  <Image
                    src={category.src}
                    height={100}
                    width={100}
                    className="w-1/2"
                    alt={category.alt}
                  />
                </div>
              </div>
              <div className="text-center font-semibold text-[12px] pt-3">
                {category.label}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
