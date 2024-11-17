import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function FooterLinks() {
  return (
    <>
      <section className="bg-[#dddbd7] relative mt-1">
        <div className="flex flex-wrap lg:flex-nowrap justify-around text-center lg:text-left pt-5 px-10 pb-7 w-[90%] mx-auto">
          {/* Left Section */}
          <div className="relative border-b-2 lg:border-b-0 lg:border-r-2 border-[#d1d0cf] px-5 pb-5 lg:pb-0 w-full lg:w-auto">
            <div className="flex justify-center lg:justify-start items-center">
              <div className="bg-white w-[80px] h-[80px] rounded-full relative overflow-hidden shrink-0">
                <Image
                  src="https://media.sweetwater.com/api/i/w-180__q-50/include/ses/left/tim-holsinger.png"
                  width={80}
                  height={80}
                  alt="tim"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="px-4 pb-3">
                <div className="font-extrabold tracking-wide">NEED HELP?</div>
                <div className="text-[13px]">Call your Sales Engineer</div>
                <div className="text-[11px] leading-5">
                  What is a Sales Engineer?
                </div>
                <div className="font-bold text-[14px] py-1">(800) 222-4700</div>
                <div className="text-[11px]">Email Us</div>
              </div>
            </div>
            <div className="border-[#d1d0cf] border-t-2 my-3"></div>
            <div className="pt-2 flex justify-center">
              {[
                { icon: faFacebookF, color: "text-blue-700", link: "/" },
                { icon: faTwitter, color: "text-blue-500", link: "/" },
                { icon: faInstagram, color: "text-pink-500", link: "/" },
                { icon: faYoutube, color: "text-red-600", link: "/" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  className="w-[32px] h-[32px] rounded-full border-2 border-gray-700 flex items-center justify-center mx-1 hover:scale-110 hover:duration-200"
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    className={`text-[14px] ${social.color}`}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Other Sections */}
          {[
            {
              title: "ABOUT GUITARSTORE",
              links: [
                "Careers",
                "Environmental & Social Responsibility",
                "Our Sales Engineers",
                "Why Choose GuitarStore?",
                "Tour Our Campus",
                "Press Releases",
              ],
            },
            {
              title: "CUSTOMER SERVICE",
              links: [
                "Free Shipping Policy",
                "Order Status",
                "Return Policy",
                "Sales and Use Tax Policy",
                "SweetCare Remote",
                "GuitarStore Support Articles",
                "FAQ",
                "Contact Us",
              ],
            },
            {
              title: "ORDERING",
              links: [
                "Free Catalog",
                "Gift Cards",
                "Bonus Bucks",
                "Payment Options",
                "Shipping and Delivery Times",
                "Gear Exchange",
              ],
            },
            {
              title: "SERVICES",
              links: [
                "Guitar Workshop",
                "Electronic Repairs Workshop",
                "Music Store",
                "Events and Workshops",
                "Guitar Showroom",
                "Music Lessons",
                "Recording Studio",
              ],
            },
          ].map((section, index) => (
            <div
              key={index}
              className="w-full lg:w-auto px-3 pb-5 lg:pb-0 lg:px-5 sm:pt-4 lg:pt-0"
            >
              <div className="font-bold text-[13px] pb-2">{section.title}</div>
              {section.links.map((link, idx) => (
                <div key={idx} className="text-[12px] leading-7">
                  <Link href="/">{link}</Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#dddbd7] relative border-t-2 border-[#d1d0cf] pb-2">
        <div className="pt-5">
          <div className="flex flex-wrap justify-center items-center text-center pb-5">
            <div className="px-1 text-[9px] font-bold w-full lg:w-auto">
              GuitarStore
            </div>
            <div className="px-1 text-[9px] font-light w-full lg:w-auto">
              5501 U.S. Hwy 30 W. Fort Wayne, IN 46818
            </div>
            <div className="px-1 text-[9px] w-full lg:w-auto">
              <Link href="/">Get Directions</Link> |{" "}
              <Link href="/">Phone Hours</Link> |{" "}
              <Link href="/">Store Hours</Link>
            </div>
          </div>

          <div className="text-center">
            <div className="font-bold text-[10px]">
              Explore our commitments to you
            </div>
            <div className="flex flex-wrap justify-center items-center">
              {[
                "Terms of Use",
                "Privacy Policy",
                "Phone Recording Policy",
                "Accessibility",
                "Cookies Settings",
                "Do Not Sell Or Share My Information",
              ].map((item, index) => (
                <div key={index} className="px-1 text-[9px] font-light">
                  <Link href="/">{item}</Link>
                </div>
              ))}
            </div>
            <div className="text-[9px] pb-3 font-light">
              If you have any questions, please call us at (123) 456-7890
            </div>
          </div>

          <div className="relative text-center pb-7">
            <div className="text-[8px] font-light">
              © 2024 GuitarStore - All Rights Reserved
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
