import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function PopularCategories() {
  return (
    <div className="my-4 relative pb-7">
      <div className="text-center text-[28px] font-semibold p-2 tracking-wide">
        Popular Categories
      </div>

      <div className="flex justify-center items-center pt-6">
        <Link href="/guitars">
          <div className="hover:text-blue-700 mx-6 my-3">
            <div className="flex justify-center items-center">
              <div className="bg-gray-100 w-[100px] h-[100px] rounded-full flex justify-center items-center hover:border-blue-700 hover:border object-fill hover:duration-100 hover:bg-white">
                <Image
                  src={
                    "https://media.sweetwater.com/m/home/cats/ENCTEBGH.png?format=jpg&optimize=high&auto=webp&quality=70"
                  }
                  height={200}
                  width={200}
                  className="w-1/2"
                  alt="Guitars"
                />
              </div>
            </div>
            <div className="text-center font-semibold text-[12px] pt-3 ">
              Guitars
            </div>
          </div>
        </Link>

        <Link href="/studio-and-recording">
          <div className="hover:text-blue-700 mx-6 my-3">
            <div className="flex justify-center items-center">
              <div className="bg-gray-100 w-[100px] h-[100px] rounded-full flex justify-center items-center hover:border-blue-700 hover:border object-fill hover:duration-100 hover:bg-white">
                <Image
                  src={
                    "https://media.sweetwater.com/m/home/cats/Arrow-small.png?format=jpg&optimize=high&auto=webp&quality=70&width=202"
                  }
                  height={200}
                  width={200}
                  className="w-1/2"
                  alt="Studio"
                />
              </div>
            </div>
            <div className="text-center font-semibold text-[12px] pt-3">
              Studio & Recording
            </div>
          </div>
        </Link>

        <Link href="/drums-and-percussion">
          <div className="hover:text-blue-700 mx-6 my-3">
            <div className="flex justify-center items-center">
              <div className="bg-gray-100 w-[100px] h-[100px] rounded-full flex justify-center items-center hover:border-blue-700 hover:border object-fill hover:duration-100 hover:bg-white">
                <Image
                  src={
                    "https://media.sweetwater.com/m/home/cats/LM402.png?format=jpg&optimize=high&auto=webp&quality=70&width=202"
                  }
                  height={200}
                  width={200}
                  className="w-1/2"
                  alt="Drums"
                />
              </div>
            </div>
            <div className="text-center font-semibold text-[12px] pt-3">
              Drums & Percussion
            </div>
          </div>
        </Link>

        <Link href="/bass">
          <div className="hover:text-blue-700 mx-6 my-3">
            <div className="flex justify-center items-center">
              <div className="bg-gray-100 w-[100px] h-[100px] rounded-full flex justify-center items-center hover:border-blue-700 hover:border object-fill hover:duration-100 hover:bg-white">
                <Image
                  src={
                    "https://media.sweetwater.com/m/home/cats/PBassAPR3SB.png?format=jpg&optimize=high&auto=webp&quality=70&width=202"
                  }
                  height={200}
                  width={200}
                  className="w-1/2"
                  alt="Bass"
                />
              </div>
            </div>
            <div className="text-center font-semibold text-[12px] pt-3">
              Bass
            </div>
          </div>
        </Link>

        <Link href="/keyboards">
          <div className="hover:text-blue-700 mx-6 my-3">
            <div className="flex justify-center items-center">
              <div className="bg-gray-100 w-[100px] h-[100px] rounded-full flex justify-center items-center hover:border-blue-700 hover:border object-fill hover:duration-100 hover:bg-white">
                <Image
                  src={
                    "https://media.sweetwater.com/m/home/cats/Matriarch.png?format=jpg&optimize=high&auto=webp&quality=70&width=202"
                  }
                  height={200}
                  width={200}
                  className="w-1/2"
                  alt="Keyboards"
                />
              </div>
            </div>
            <div className="text-center font-semibold text-[12px] pt-3">
              Keyboards & Synth
            </div>
          </div>
        </Link>

        <Link href="/live-sound-and-lights">
          <div className="hover:text-blue-700 mx-6 my-3">
            <div className="flex justify-center items-center">
              <div className="bg-gray-100 w-[100px] h-[100px] rounded-full flex justify-center items-center hover:border-blue-700 hover:border object-fill hover:duration-100 hover:bg-white">
                <Image
                  src={
                    "https://media.sweetwater.com/m/home/cats/flow8.jpg?format=jpg&optimize=high&auto=webp&quality=70&width=202"
                  }
                  height={200}
                  width={200}
                  className="w-1/2"
                  alt="Live Sound"
                />
              </div>
            </div>
            <div className="text-center font-semibold text-[12px] pt-3">
              Live Sound & Lights
            </div>
          </div>
        </Link>

        <Link href="/software">
          <div className="hover:text-blue-700 mx-6 my-3">
            <div className="flex justify-center items-center">
              <div className="bg-gray-100 w-[100px] h-[100px] rounded-full flex justify-center items-center hover:border-blue-700 hover:border object-fill hover:duration-100 hover:bg-white">
                <Image
                  src={
                    "https://media.sweetwater.com/m/home/cats/ptstudioann.jpg?format=jpg&optimize=high&auto=webp&quality=70&width=202"
                  }
                  height={200}
                  width={200}
                  className="w-1/2"
                  alt="Software"
                />
              </div>
            </div>
            <div className="text-center font-semibold text-[12px] pt-3">
              Software & Plug-ins
            </div>
          </div>
        </Link>
      </div>

      <div className="flex justify-center items-center pt-6 ">
        <Link href="/dj-equipment">
          <div className="hover:text-blue-700 mx-6 my-4">
            <div className="flex justify-center items-center">
              <div className="bg-gray-100 w-[100px] h-[100px] rounded-full flex justify-center items-center hover:border-blue-700 hover:border object-fill hover:duration-100 hover:bg-white">
                <Image
                  src={
                    "https://media.sweetwater.com/m/home/cats/ATLP120XUSBSV.png?format=jpg&optimize=high&auto=webp&quality=70&width=202"
                  }
                  height={200}
                  width={200}
                  className="w-1/2"
                  alt="DJ Equipment"
                />
              </div>
            </div>
            <div className="text-center font-semibold text-[12px] pt-3">
              DJ Equipment
            </div>
          </div>
        </Link>

        <Link href="/microphones">
          <div className="hover:text-blue-700 mx-6 my-4">
            <div className="flex justify-center items-center">
              <div className="bg-gray-100 w-[100px] h-[100px] rounded-full flex justify-center items-center hover:border-blue-700 hover:border object-fill hover:duration-100 hover:bg-white">
                <Image
                  src={
                    "https://media.sweetwater.com/m/home/cats/SM58-cat.png?format=jpg&optimize=high&auto=webp&quality=70&width=202"
                  }
                  height={200}
                  width={200}
                  className="w-1/2"
                  alt="Microphones"
                />
              </div>
            </div>
            <div className="text-center font-semibold text-[12px] pt-3">
              Microphones
            </div>
          </div>
        </Link>

        <Link href="/band-and-orchestra">
          <div className="hover:text-blue-700 mx-6 my-4">
            <div className="flex justify-center items-center">
              <div className="bg-gray-100 w-[100px] h-[100px] rounded-full flex justify-center items-center hover:border-blue-700 hover:border object-fill hover:duration-100 hover:bg-white">
                <Image
                  src={
                    "https://media.sweetwater.com/m/home/cats/KingSlvFlTr.png?format=jpg&optimize=high&auto=webp&quality=70&width=202"
                  }
                  height={200}
                  width={200}
                  className="w-1/2"
                  alt="Band & Orchestra"
                />
              </div>
            </div>
            <div className="text-center font-semibold text-[12px] pt-3">
              Band & Orchestra
            </div>
          </div>
        </Link>

        <Link href="/home-audio-and-electronics">
          <div className="hover:text-blue-700 mx-6 my-4 relative">
            <div className="flex justify-center items-center">
              <div className="bg-gray-100 w-[100px] h-[100px] rounded-full flex justify-center items-center hover:border-blue-700 hover:border object-fill hover:duration-100 hover:bg-white">
                <Image
                  src={
                    "https://media.sweetwater.com/m/home/cats/TourOneM2Bk.png?format=jpg&optimize=high&auto=webp&quality=70&width=202"
                  }
                  height={200}
                  width={200}
                  className="w-1/2"
                  alt="Home Audio"
                />
              </div>
            </div>
            <div className="text-center font-semibold text-[12px] pt-3">
              Home Audio & <br></br>Electronics
            </div>
          </div>
        </Link>

        <Link href="/commercial-audio-and-install">
          <div className="hover:text-blue-700 mx-6 my-4">
            <div className="flex justify-center items-center">
              <div className="bg-gray-100 w-[100px] h-[100px] rounded-full flex justify-center items-center hover:border-blue-700 hover:border object-fill hover:duration-100 hover:bg-white">
                <Image
                  src={
                    "https://media.sweetwater.com/m/home/cats/Control28.png?format=jpg&optimize=high&auto=webp&quality=70&width=202"
                  }
                  height={200}
                  width={200}
                  className="w-1/2"
                  alt="Commercial"
                />
              </div>
            </div>
            <div className="text-center font-semibold text-[12px] pt-3">
              Commercial Audio & <br></br>Install
            </div>
          </div>
        </Link>

        <Link href="/accessories">
          <div className="hover:text-blue-700 mx-6 my-4">
            <div className="flex justify-center items-center">
              <div className="bg-gray-100 w-[100px] h-[100px] rounded-full flex justify-center items-center hover:border-blue-700 hover:border object-fill hover:duration-100 hover:bg-white">
                <Image
                  src={
                    "https://media.sweetwater.com/m/home/cats/M4WP006.png?format=jpg&optimize=high&auto=webp&quality=70&width=202"
                  }
                  height={200}
                  width={200}
                  className="w-1/2"
                  alt="Accessories"
                />
              </div>
            </div>
            <div className="text-center font-semibold text-[12px] pt-3">
              Accessories
            </div>
          </div>
        </Link>

        <Link href="/content-creators">
          <div className="hover:text-blue-700 mx-6 my-4">
            <div className="flex justify-center items-center">
              <div className="bg-gray-100 w-[100px] h-[100px] rounded-full flex justify-center items-center hover:border-blue-700 hover:border object-fill hover:duration-100 hover:bg-white">
                <Image
                  src={
                    "https://media.sweetwater.com/m/home/cats/PodMic.png?format=jpg&optimize=high&auto=webp&quality=70&width=202"
                  }
                  height={200}
                  width={200}
                  className="w-1/2"
                  alt="Content Creators"
                />
              </div>
            </div>
            <div className="text-center font-semibold text-[12px] pt-3">
              Content Creators
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
