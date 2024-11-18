import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useCart } from "@/context/CartContext"; // Ensure this import is correct
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function ItemDetail({ item, storeName }) {
  const { addItemToCart, removeItemFromCart } = useCart();
  const { name, description, price, image, special } = item;
  const [isActive, setIsActive] = useState(false);

  function handleActivateButton(e) {
    e.preventDefault();

    if (!isActive) {
      setIsActive(true);
      addItemToCart(item);
    } else {
      setIsActive(false);
      removeItemFromCart(item);
    }
  }

  function classForBackgroundColor() {
    if (special === "New Arrival") {
      return "bg-blue-600";
    } else if (special === "On Sale" || special === "Restock") {
      return "bg-red-500";
    } else if (special === "Top-Seller" || special === "Download") {
      return "bg-gray-900";
    }
  }

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <section className="mx-auto relative px-5 sm:px-10 py-6">
        {/* Breadcrumb */}
        <div className="hidden sm:flex justify-start items-center">
          <Link href="/">Home</Link>
          <div className="w-[5px] h-[5px] bg-black rounded-full mx-3"></div>
          <Link
            href={`/${storeName
              .toLowerCase()
              .replace(/&/g, "and")
              .replace(/\s+/g, "-")}`}
          >
            {storeName}
          </Link>
          <div className="w-[5px] h-[5px] bg-black rounded-full mx-3"></div>
          <span className="font-bold">
            {name.length > 50 ? name.substring(0, 45) + "..." : name}
          </span>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start pt-8 lg:pt-16 pb-10 w-full mx-auto border-b-2">
          {/* Image Section */}
          <div className="lg:border-r-2 w-full lg:w-8/12 mb-6 lg:mb-0">
            <Image
              src={image}
              width={800}
              height={800}
              alt={image}
              className="w-full max-w-lg lg:max-w-full mx-auto lg:pr-11"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-4/12 text-center lg:text-left pl-0 lg:pl-9 mt-2">
            {special && (
              <div
                className={`border py-1 w-[100px] mx-auto lg:mx-0 flex justify-center items-center text-[13px] font-bold tracking-wide text-white ${classForBackgroundColor()}`}
              >
                {special}
              </div>
            )}

            <div className="pt-4 font-extrabold tracking-wide text-[24px] sm:text-[32px]">
              {name}
            </div>
            <div className="mt-3 mb-2">
              <span className="font-bold">Condition:</span> New
            </div>
            <div className="font-bold text-[20px] sm:text-[24px] pb-5">
              ${price}
            </div>
            <hr className="font-extrabold" />
            <div className="mx-7 my-4 text-sm flex justify-center lg:justify-start items-center font-bold">
              6-month special financing + $11 back in Rewards
              <br />
              Limited time
            </div>
            <hr className="font-extrabold" />
            <div className="my-3 mx-2 text-sm text-center lg:text-left">
              Pay in 4 interest-free payments of ${parseFloat(price) / 4.0}.
            </div>
            <hr className="font-extrabold" />
            <div className="my-3 mx-2 text-sm text-center lg:text-left">
              Lease-To-Own Purchase Options
            </div>
            <hr className="font-extrabold" />
            <div className="my-9 bg-gray-50 p-6">
              <div>
                <div className="text-red-500 font-medium tracking-widest text-md mb-4">
                  <i className="fa-solid fa-store text-black mr-2 text-[22px]"></i>
                  Check store availability
                </div>
                <div className="tracking-widest text-md mb-1">
                  <i className="fa-solid fa-truck-fast text-black mr-3 text-[22px]"></i>
                  <span className="font-bold">Free Delivery</span> to{" "}
                  <span className="font-bold underline">United States</span>
                </div>
                <span className="text-green-800 tracking-wider text-md block ml-10 lg:ml-0">
                  In-stock
                </span>
              </div>
            </div>

            {/* Add to Cart Section */}
            <div className="flex mb-7">
              <div
                className={`w-10/12 flex justify-center items-center tracking-wider text-white font-bold p-3 rounded shadow-lg hover:cursor-pointer mx-auto lg:mx-0 ${
                  isActive ? "bg-green-600" : "bg-red-600"
                }`}
                onClick={handleActivateButton}
              >
                {isActive ? "Item Added" : "Add to Cart"}
              </div>
              <div className="w-2/12 flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="hover:cursor-pointer text-[25px] text-gray-500"
                />
              </div>
            </div>
            <hr className="font-extrabold" />
          </div>
        </div>

        {/* Description Section */}
        <div className="py-7 px-5 sm:px-9">
          <div className="font-bold text-[22px] sm:text-[26px] mb-5 text-center">
            Description
          </div>
          <div className="font-extralight leading-7">{description}</div>
        </div>
      </section>
    </>
  );
}
