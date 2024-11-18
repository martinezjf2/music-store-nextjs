import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import Head from "next/head";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function CheckoutPage() {
  const { cart, removeItemFromCart, calculateTotal } = useCart();
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  const handleCheckout = async () => {
    setLoading(true);

    try {
      const stripe = await stripePromise;

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cartItems: cart.map((item) => ({
            name: item.name,
            image: item.image,
            price: item.price,
            quantity: 1,
          })),
        }),
      });

      const { sessionId } = await response.json();

      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error("Error in checkout:", error);
      alert("There was an issue with your checkout.");
    } finally {
      setLoading(false);
    }
  };

  const allItems = cart.map((item, index) => (
    <div
      key={index}
      className="flex flex-wrap md:flex-nowrap items-center mb-5 px-3 py-4"
    >
      <div className="w-full md:w-2/12 flex justify-center items-center mb-3 md:mb-0">
        <Image
          src={item.image}
          alt={item.name}
          width={120}
          height={120}
          className="w-[120px] h-auto object-cover"
        />
      </div>
      <div className="w-full md:w-6/12 px-2">
        <div className="font-bold text-[14px] md:text-[16px] text-[#0a3b6b] hover:underline hover:cursor-pointer">
          {item.name}
        </div>
        <div className="text-[9px] mt-1 font-light">
          {item.description.length > 150
            ? item.description.substring(0, 135) + "..."
            : item.description}
        </div>
        <div className="text-[10px] mt-1 flex justify-start">
          <div>Condition: {item.condition}</div>
          <div className="ml-4">Price: ${item.price}</div>
        </div>
        <div className="text-red-600 text-[10px] mt-1">
          <span className="font-bold">Promo: 36 Month</span> Promotional
          Financing Available.
        </div>
      </div>
      <div className="w-full md:w-4/12 flex justify-between items-center">
        <div className="text-center font-bold text-[14px]">
          1
          <br />
          <span
            className="text-[#0a3b6b] hover:underline hover:cursor-pointer text-[10px] font-light"
            onClick={() => removeItemFromCart(item)}
          >
            Remove
          </span>
        </div>
        <div className="font-bold text-[14px]">${item.price}</div>
      </div>
    </div>
  ));

  return (
    <>
      <Head>
        <title>Checkout - GuitarStore</title>
      </Head>
      <section className="w-full max-w-6xl mx-auto shadow-2xl rounded-md mb-24 relative pb-5  sm:max-w-xl md:max-w-3xl lg:max-w-4xl">
        {/* Header */}
        <div className="mt-6 flex">
          <div className="bg-[#015c96] text-white py-[7px] flex justify-center items-center w-11 rounded-tl-md">
            <i className="fa-solid fa-cart-shopping text-[22px]"></i>
          </div>
          <div className="bg-[#0072bb] text-white text-[16px] md:text-[20px] font-semibold tracking-wider px-2 flex items-center w-full rounded-tr-md">
            Shopping Cart
          </div>
        </div>

        {/* Table Header */}
        <div className="hidden md:flex bg-[#edf1f9] justify-between items-center py-2 px-3">
          <div className="w-2/12 text-[9px] text-center">PRODUCT</div>
          <div className="w-6/12 text-[9px] text-left">DETAILS</div>
          <div className="w-4/12 text-[9px] text-center flex justify-between">
            <span>QTY.</span>
            <span>PRICE</span>
          </div>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <h1 className="text-center mt-10 text-lg font-bold pb-28">
            There is nothing in the cart!
          </h1>
        ) : (
          allItems
        )}

        {/* Checkout Section */}
        {cart.length > 0 && (
          <div>
            <div className="flex flex-wrap justify-end text-right mt-3 mb-4">
              <div className="mr-6 mt-1">
                <div className="font-bold text-[10px]">SUBTOTAL</div>
                <div className="font-bold text-[10px] mt-2">
                  ESTIMATED SHIPPING
                </div>
                <div className="font-light text-[8px] mt-1">
                  Additional shipping methods will be available during checkout!
                </div>
              </div>
              <div className="mr-4">
                <div className="font-bold text-[14px]">
                  ${calculateTotal().toFixed(2)}
                </div>
                <div className="text-red-600 font-extrabold text-[14px]">
                  FREE
                </div>
              </div>
            </div>
            <div className="h-[1px] bg-gray-200 w-full md:w-7/12 mx-auto"></div>
            <div className="flex justify-center md:justify-end mr-3 pb-4 pt-6">
              <button
                onClick={handleCheckout}
                disabled={loading}
                className="bg-[#3b7d1b] text-white font-semibold py-2 px-10 md:px-20 rounded hover:cursor-pointer"
              >
                {loading ? "Processing..." : "CHECKOUT"}
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
