// Include the New Gear Day, Subscriptions. and the footer

import React from "react";

export default function Footer() {
  return (
    <>
      <section className="relative bg-repeat bg-fixed bg-[url(https://media.sweetwater.com/m/include/footer/images/new-gear-day/gear-pattern-optimized-700x700.png?format=webp)] overflow-hidden ">
        <div className=" h-[170px] bg-[#07629c] bg-opacity-95 w-full  flex justify-center items-center">
          <div className="flex justify-center items-center p-7">
            <div className="bg-gray-200 hover:opacity-100 opacity-85 hover:scale-110 hover:duration-200 h-[120px] w-[135px] border-blue-500 border-4 rounded-full relative overflow-hidden mr-3">
              <img
                src="https://media.sweetwater.com/m/include/footer/images/new-gear-day/10.jpg?format=webp"
                className="w-[130px] m-auto"
              />
            </div>
            <div className="bg-gray-200 hover:opacity-100 opacity-85 hover:scale-110 hover:duration-200 h-[120px] w-[135px] border-blue-500 border-4 rounded-full relative overflow-hidden mr-3">
              <img
                src="https://media.sweetwater.com/m/include/footer/images/new-gear-day/18.jpg?format=webp"
                className="w-[130px] m-auto"
              />
            </div>
            <div className="bg-gray-200 hover:opacity-100 opacity-85 hover:scale-110 hover:duration-200 h-[120px] w-[135px] border-blue-500 border-4 rounded-full relative overflow-hidden mr-3">
              <img
                src="https://media.sweetwater.com/m/include/footer/images/new-gear-day/19.jpg?format=webp"
                className="w-[130px] m-auto"
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
            <div className="bg-gray-200 hover:opacity-100 h-[120px]  opacity-85 hover:scale-110 hover:duration-200 w-[135px] border-blue-500 border-4 rounded-full relative overflow-hidden mr-3">
              <img
                src="https://media.sweetwater.com/m/include/footer/images/new-gear-day/16.jpg?format=webp"
                className="w-[130px] m-auto"
              />
            </div>
            <div className="bg-gray-200 hover:opacity-100 h-[120px]  opacity-85 hover:scale-110 hover:duration-200 w-[135px] border-blue-500 border-4 rounded-full relative overflow-hidden mr-3">
              <img
                src="https://media.sweetwater.com/m/include/footer/images/new-gear-day/6.jpg?format=webp"
                className="w-[130px] m-auto"
              />
            </div>
            <div className="bg-gray-200 hover:opacity-100 h-[120px]  opacity-85 hover:scale-110 hover:duration-200 w-[135px] border-blue-500 border-4 rounded-full relative overflow-hidden mr-3">
              <img
                src="https://media.sweetwater.com/m/include/footer/images/new-gear-day/3.jpg?format=webp"
                className="w-[130px] m-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 shadow-lg">
        <div className="flex md:w-[80%] mx-auto pt-5 pb-5">
          <div className="border-r-2 py-3 px-5 relative">
            <div className="text-[24px] font-bold tracking-wider leading-none">
              GEAR
            </div>
            <div className="leading-none tracking-widest text-[14px] font-semibold">
              EXCHANGE
            </div>
            <div className="pt-2 text-[11px] pr-2">
              Turn your old gear into new gear with the GuitarStore Gear
              Exchange!
            </div>
            <div className="text-[12px] absolute bottom-0">
              <a href="#">
                Take me there <span>{">"}</span>
              </a>
            </div>
          </div>

          <div className="py-3 px-4 relative w-1/3">
            <div className="font-bold text-[17px]">
              SIGN UP FOR EMAIL OFFERS!
            </div>
            <div className="text-[11px]">
              Exclusive deals, delivered straight to your inbox.
            </div>
            <div className="flex mt-4">
              <input
                type="text"
                placeholder="Enter your email address"
                className="px-2 py-1 text-[12px] w-full border-gray-200 border "
              />
              <button className="text-[11px] rounded-sm text-white bg-[#0273ba] py-[.45rem] px-[.6rem] ">
                Subscribe
              </button>
            </div>
          </div>

          <div className="border-l-2 py-3 px-5 relative">
            <div className="font-bold text-[17px]">SPECIAL FINANCING!</div>
            <div className="text-[12px] font-light relative">
              <div className="absolute">
                Now is the perfect time to get the gear you want with simple,
                promotional financing.
              </div>
              <img
                src="https://media.sweetwater.com/api/i/q-60__w-180/resources/sweetwater-synchrony-card.png"
                className="absolute -right-40 -top-3 w-5/6"
              />
            </div>
            <div className="absolute bottom-0 text-[12px]">
              <a>
                Take me there <span>{">"}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#dddbd7] relative mt-1">
        <div className="flex justify-around pt-5 px-10 pb-7 w-[80%] mx-auto">
          <div className="relative border-r-2 border-[#d1d0cf] px-5">
            <div className="flex">
              <div className="bg-white w-[80px] h-[80px] rounded-full relative overflow-hidden">
                <div className=" absolute bottom-0">
                  <img
                    src="https://media.sweetwater.com/api/i/w-180__q-50/include/ses/left/tim-holsinger.png"
                    className=""
                  />
                </div>
              </div>
              <div className="px-4 pb-3">
                <div className="font-extrabold tracking-wide">NEED HELP?</div>
                <div className="text-[13px]">Call your Sales Engineer</div>
                <div className="text-[11px] leading-5">
                  What is a Sales Engineer?
                </div>
                <div className="font-bold text-[14px] py-1">
                  (800) 222- 4700
                </div>
                <div className="text-[11px]">Email Us</div>
              </div>
            </div>
            <div className="border-[#d1d0cf] border-t-2"></div>
            <div className="pt-2 relative">
              <div className="flex justify-center items-center">
                <div className="w-[32px] h-[32px] rounded-full border-2 border-gray-700 mx-1"></div>
                <div className="w-[32px] h-[32px] rounded-full border-2 border-gray-700 mx-1"></div>
                <div className="w-[32px] h-[32px] rounded-full border-2 border-gray-700 mx-1"></div>
                <div className="w-[32px] h-[32px] rounded-full border-2 border-gray-700 mx-1"></div>
              </div>
            </div>
          </div>

          <div className="pl-6 pr-1">
            <div className="font-bold text-[13px] pb-2">ABOUT GUITARSTORE</div>
            <div className="text-[12px] leading-7">
              <a href="/">Careers</a>
            </div>
            <div className="text-[12px] leading-7">
              <a href="/">Environmental & Social Responsibility</a>
            </div>
            <div className="text-[12px] leading-7">
              <a href="/">Our Sales Engineers</a>
            </div>
            <div className="text-[12px] leading-7">
              <a href="/">Why Choose GuitarStore?</a>
            </div>
            <div className="text-[12px] leading-7">
              <a href="/">Tour Our Campus</a>
            </div>
            <div className="text-[12px] leading-7">
              <a href="/">Press Releases</a>
            </div>
          </div>

          <div className="px-3">
            <div className="font-bold text-[13px] pb-2">CUSTOMER SERVICE</div>
            <div className="text-[12px] leading-7">
              <a href="/">Free Shipping Policy</a>
            </div>
            <div className="text-[12px] leading-7">
              <a href="/">Order Status</a>
            </div>
            <div className="text-[12px] leading-7">
              <a href="/">Return Policy</a>
            </div>
            <div className="text-[12px] leading-7">
              <a href="/">Sales and Use Tax Policy</a>
            </div>
            <div className="text-[12px] leading-7">
              <a href="/">SweetCare Remote</a>
            </div>
            <div className="text-[12px] leading-7">
              <a href="/">GuitarStore Support Articles</a>
            </div>
            <div className="text-[12px] leading-7">
              <a href="/">FAQ</a>
            </div>
            <div className="text-[12px] leading-7">
              <a href="/">Contact Us</a>
            </div>
          </div>

          <div className="px-9">
            <div className="font-bold text-[13px] pb-2">ORDERING</div>
            <div className="text-[12px] leading-7">
              <a href="/">Free Catalog</a>
            </div>
            <div className="text-[12px] leading-7">
              <a href="/">Gift Cards</a>
            </div>
            <div className="text-[12px] leading-7">
              <a href="/">Bonus Bucks</a>
            </div>
            <div className="text-[12px] leading-7">
              <a href="/">Payment Options</a>
            </div>
            <div className="text-[12px] leading-7">
              <a href="/">Shipping and Delivery Times</a>
            </div>
            <div className="text-[12px] leading-7">
              <a href="/">Gear Exchange</a>
            </div>
          </div>

          <div className="pl-0">
            <div className="font-bold text-[13px] pb-2">SERVICES</div>
            <div className="text-[12px] leading-7">
              <a href="/">Guitar Workshop</a>
            </div>
            <div className="text-[12px] leading-7">
              <a href="/">Electronic Repairs Workshop</a>
            </div>
            <div className="text-[12px] leading-7">
              <a href="/">Music Store</a>
            </div>
            <div className="text-[12px] leading-7">
              <a href="/">Events and Workshops</a>
            </div>
            <div className="text-[12px] leading-7">
              <a href="/">Guitar Showroom</a>
            </div>
            <div className="text-[12px] leading-7">
              <a href="/">Music Lessons</a>
            </div>
            <div className="text-[12px] leading-7">
              <a href="/">Recording Studio</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#dddbd7] relative border-t-2 border-[#d1d0cf] pb-2">
        <div className="pt-5">
          <div className="flex justify-center items-center pb-5">
            <div className="px-1 text-[9px] font-bold">GuitarCenter Sound</div>
            <div className="px-1 text-[9px] font-light">
              5501 U.S. Hwy 30 W.Fort Wayne, IN 46818
            </div>
            <div className="px-1 text-[9px]">
              <a>Get Directions</a> | <a>Phone Hours</a> | <a>Store Hours</a>
            </div>
          </div>

          <div className="relative text-center">
            <div className="font-bold text-[10px]">
              Explore our commitments to you
            </div>
            <div className="flex justify-center items-center">
              <div className="px-1 text-[9px] font-light">
                <a>Terms of Use</a>
              </div>
              <div className="px-1 text-[9px] font-light">
                <a>Privacy Policy</a>
              </div>
              <div className="px-1 text-[9px] font-light">
                <a>Phone Recording Policy</a>
              </div>
              <div className="px-1 text-[9px] font-light">
                <a>Accessibility</a>
              </div>
              <div className="px-1 text-[9px] font-light">
                <a>Cookies Settings</a>
              </div>
              <div className="px-1 text-[9px] font-light">
                <a>Do Not Sell Or Share My Information</a>
              </div>
            </div>
            <div className="text-[9px] pb-3 font-light">
              If you have any questions, please call us at (123) 456-7890
            </div>
          </div>

          <div className="relative text-center pb-7">
            <div className="text-[8px] font-light">
              © 2024 GuitarCenter - All Rights Reserved
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
