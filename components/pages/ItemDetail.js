import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function ItemDetail({ item, storeName }) {
  const { name, description, price, image, special } = item;

  // console.log({ item });
  return (
    <>
      <section className="mx-auto relative px-10 py-6 ">
        <div className="flex justify-start items-center">
          <a href="/">Home</a>{" "}
          <div className="w-[5px] h-[5px] bg-black rounded-full flex justify-center items-center mx-3"></div>{" "}
          <a href={`/${storeName.toLowerCase()}`} className="">
            {storeName}
          </a>{" "}
          <div className="w-[5px] h-[5px] bg-black rounded-full flex justify-center items-center mx-3"></div>{" "}
          <span className="font-bold">
            {name.length > 50 ? name.substring(0, 45) + "..." : name}
          </span>
        </div>

        <div className="mt-12 flex justify-around py-7 border-t-2 w-11/12 mx-auto border-b-2">
          {/* Image Section */}
          <div className="border-r w-8/12">
            <img src={image} className="w-[800px]" />
          </div>

          {/* Content Section */}
          <div className="w-4/12 text-left pl-9 mt-2">
            <div
              className={`border py-1 w-[100px] flex justify-center items-center text-sm font-bold`}
            >
              {special}
            </div>

            <div className="pt-4 font-extrabold tracking-wide text-[32px]">
              {name}
            </div>
            <div className="mt-3 mb-2">
              <span className="font-bold">Condition:</span> New{" "}
            </div>
            <div className="font-bold text-[24px] pb-5">${price}</div>
            <hr className="font-extrabold"></hr>
            <div className="mx-7 my-4 text-sm flex justify-center items-center font-bold">
              6-month special financing + $11 back in Rewards<br></br>Limited
              time
            </div>
            <hr className="font-extrabold"></hr>
            <div className="my-3 mx-2 text-sm">
              Pay in 4 interest-free payments of ${parseFloat(price) / 4.0}.
            </div>
            <hr className="font-extrabold"></hr>
            <div className="my-3 mx-2 text-sm">
              Lease-To-Own Purchase Options
            </div>
            <hr className="font-extrabold"></hr>
            <div className="my-9 bg-gray-50 p-8">
              <div>
                <div className="text-red-500 tracking-wider text-sm mb-4">
                  Check store availibity
                </div>
                <div className="tracking-wider text-sm mb-1">
                  <span className="font-bold">Free Delivery</span> to{" "}
                  <span className="font-bold underline">United States</span>
                </div>
                <span className="text-green-800 tracking-wider text-[14px] mt-0 ">
                  In-stock
                </span>
              </div>
            </div>
            <div className="flex mb-7">
              <div className="w-10/12 flex justify-center items-center tracking-wider bg-red-600 text-white font-bold p-3 rounded shadow-lg">
                Add to Cart
              </div>
              <div className="w-2/12 flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="hover:cursor-pointer text-[25px] text-gray-500"
                />
              </div>
            </div>
            <hr className="font-extrabold"></hr>
            <div>Here comes more content in flex</div>
            <hr className="font-extrabold"></hr>
          </div>
        </div>

        <div></div>
      </section>
    </>
  );
}
