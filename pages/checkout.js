import { useContext, useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function CheckoutPage() {
  const { cart, removeItemFromCart, calculateTotal } = useCart();
  const [isClient, setIsClient] = useState(false); // Track if it's client-side
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true when the component mounts
  }, []);

  // Optionally handle loading or provide a fallback if necessary
  if (!isClient) {
    return <div>Loading...</div>; // Wait for client-side rendering
  }

  const handleCheckout = async () => {
    setLoading(true);
    console.log({ cart });

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
            quantity: 1, // Adjust this if quantity is dynamic
          })),
        }),
      });

      const { sessionId } = await response.json();

      // Redirect to Stripe Checkout
      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error("Error in checkout:", error);
      alert("There was an issue with your checkout.");
    } finally {
      setLoading(false);
    }
  };

  const allItems = cart.map((item, index) => (
    <div key={index}>
      <div className="flex mb-5 mt-4 mx-1">
        <div className="w-2/12 ml-2 mr-6 flex justify-center items-center">
          <Image src={item.image} alt={item.name} width={150} height={150} />
        </div>
        <div className="w-8/12">
          <div className="font-bold text-[16px] text-[#0a3b6b] hover:underline hover:cursor-pointer">
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
        <div className="flex justify-end w-2/12">
          <div className="w-6/12 text-right font-bold text-[14px] mr-4">
            1 <br />
            <span
              className="text-[#0a3b6b] hover:underline hover:cursor-pointer text-[10px] font-light"
              onClick={() => removeItemFromCart(item)}
            >
              Remove
            </span>
          </div>
          <div className="w-6/12 text-right font-bold text-[14px] mr-2">
            ${item.price}
          </div>
        </div>
      </div>
      <hr />
    </div>
  ));

  return (
    <section className="w-8/12 mx-auto shadow-2xl rounded-bl-md mb-24 rounded-br-md relative pb-5">
      <div className="mt-6 flex">
        <div className="bg-[#015c96] text-white py-[7px] flex justify-center items-center w-11 rounded-tl-md">
          <i className="fa-solid fa-cart-shopping text-[22px]"></i>
        </div>
        <div className="bg-[#0072bb] text-white text-[20px] font-semibold tracking-wider px-2 flex justify-left items-center w-full rounded-tr-md">
          Shopping Cart
        </div>
      </div>
      <div className="bg-[#edf1f9] flex justify-between items-center py-2">
        <div className="ml-2 text-[9px]">PRODUCT</div>
        <div className="flex justify-evenly items-center">
          <div className="mr-12 text-[9px]">QTY.</div>
          <div className="mr-3 text-[9px]">PRICE</div>
        </div>
      </div>

      {cart.length === 0 ? (
        <h1 className="text-center mt-10 text-lg font-bold pb-28">
          There is nothing in the cart!
        </h1>
      ) : (
        allItems
      )}

      {cart.length > 0 && (
        <div>
          <div className="flex justify-end text-right mt-3 mb-4">
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
          <div className="h-[1px] bg-gray-200 w-7/12 absolute right-0"></div>
          <div className="flex justify-end mr-3 pb-4 pt-6">
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="bg-[#3b7d1b] text-white font-semibold py-2 px-20 rounded hover:cursor-pointer"
            >
              {loading ? "Processing..." : "CHECKOUT"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
