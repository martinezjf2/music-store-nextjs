import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import { CartContext } from '../../context/CartContext'
import { useCart } from "../../context/CartContext";

export default function ItemDetail({
  item,
  storeName,
  setCount,
}) {
  const { name, description, price, image, special } = item;
  const [isActive, setIsActive] = useState(false);
  const { updateCart, removeItemFromCart } = useCart();

  function handleActivateButton(e) {
    e.preventDefault();
    if (isActive == false) {
      setIsActive((prev) => !prev);
      console.log("adding to the cart");
      const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

      // Add new item to cart
      const newCart = [...currentCart, item];

      // Update cart data in localStorage
      updateCart(newCart);
    } else {
      setIsActive((prev) => !prev);
      console.log("removing from cart");
      // const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

      // // Remove item from cart
      // const newCart = currentCart.filter((cartItem) => cartItem.name !== item.name);

      // // Update cart data in localStorage
      // removeItemFromCart(newCart);
    }

    // console.log("This button has been clicked");
    // console.log("item", item);
  }

  // Create a function that would handle a button state set to false. If the button is active and true, add to the cart, else remove it from the cart, also within the same function, increase the count for how many items are in the cart.

  function classForBackgroundColor() {
    if (special == "New Arrival") {
      return "bg-blue-600";
    } else if (special == "On Sale") {
      return "bg-red-500";
    } else if (special == "Top-Seller" || special == "Download") {
      return "bg-gray-900";
    }
  }

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

        <div className="mt-7 flex justify-around pt-16 pb-10 border-t-2 w-11/12 mx-auto border-b-2">
          {/* Image Section */}
          <div className="border-r-2 w-8/12">
            <img src={image} className="w-[800px]" />
          </div>

          {/* Content Section */}
          <div className="w-4/12 text-left pl-9 mt-2">
            {special ? (
              <div
                className={`border py-1 w-[100px] flex justify-center items-center text-[13px] font-bold tracking-wide text-white ${classForBackgroundColor()}`}
              >
                {special}
              </div>
            ) : null}

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
            <div className="my-9 bg-gray-50 p-6">
              <div>
                <div className="text-red-500 font-medium tracking-widest text-md mb-4">
                  <i className="fa-solid fa-store text-black mr-2 text-[22px]"></i>{" "}
                  Check store availibility
                </div>
                <div className="tracking-widest text-md mb-1">
                  <i className="fa-solid fa-truck-fast text-black mr-3 text-[22px]"></i>
                  <span className="font-bold">Free Delivery</span> to{" "}
                  <span className="font-bold underline">United States</span>
                </div>
                <span className="text-green-800 tracking-wider text-md block ml-10">
                  In-stock
                </span>
              </div>
            </div>
            <div className="flex mb-7">
              <div
                className={`w-10/12 flex justify-center items-center tracking-wider  text-white font-bold p-3 rounded shadow-lg hover:cursor-pointer ${
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
            <hr className="font-extrabold"></hr>
            <div className="flex justify-evenly items-center my-5 py-1 text-center">
              <div className="text-sm font-light px-1">
                <i className="fa-solid fa-truck hover:cursor-pointer text-[25px] text-gray-800"></i>
                <br></br>
                <div className="text-sm font-light mt-2">Free Delivery</div>
              </div>
              <div className="text-sm font-light px-1 ">
                <i className="fa-solid fa-reply hover:cursor-pointer text-[25px] text-gray-800"></i>
                <br></br>
                <div className="text-sm font-light mt-2">45 Day Return</div>
              </div>
              <div className="text-sm font-light px-1">
                <i className="fa-solid fa-headset hover:cursor-pointer text-[25px] text-gray-800"></i>
                <br></br>
                <div className="text-sm font-light mt-2">Online Support</div>
              </div>
              <div className="text-sm font-light px-1">
                <i className="fa-solid fa-circle-check hover:cursor-pointer text-[25px] text-gray-800"></i>
                <br></br>
                <div className="text-sm font-light mt-2">2-Year Warranty</div>
              </div>
            </div>
            <hr className="font-extrabold"></hr>
          </div>
        </div>

        <div className="py-7 px-9">
          <div className="font-bold text-[26px] mb-5 text-center">
            Description
          </div>
          <div className="font-extralight leading-7">{description}</div>
        </div>
      </section>
    </>
  );
}
