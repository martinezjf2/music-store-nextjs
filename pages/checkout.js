export default function CheckoutPage({ cartArray }) {
  // useState for the totalAmount as float
  return (
    <section className="w-7/12 mx-auto shadow-2xl rounded-bl-md mb-8 rounded-br-md relative">
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
          <div className="mr-9 text-[9px]">QTY.</div>
          <div className="mr-3 text-[9px]">PRICE</div>
        </div>
      </div>
      <div>This is where the item will go</div>
      <hr></hr>
      <div className="flex justify-end text-right mt-3 mb-4">
        <div className="mr-6 mt-1">
          <div className="font-bold text-[10px]">SUBTOTAL</div>
          <div className="font-bold text-[10px] mt-2">ESTIMATED SHIPPING</div>
          <div className="font-light text-[8px] mt-1">
            Additional shipping methods will be available during checkout!
          </div>
        </div>
        <div className="mr-4 ">
          <div className="font-bold text-[14px]">$1,299.00</div>
          <div className="text-red-600 font-extrabold text-[14px]">FREE</div>
        </div>
      </div>
      {/* This is our horizontal line */}
      <div className="h-[1px] bg-gray-200 w-7/12 absolute right-0"></div>
      <div className="mt-5 flex justify-end text-end items-center mb-5">
        <div className="mr-5 mt-3">
          <div className="text-[#3b7d1b] text-[12px] font-bold">GET $65.00 IN BONUS BUCKS!</div>
          <div className="pl-[9rem] text-[10px]">
            The cart qualifies in Bonus Bucks when you use the GuitarStore Card<br></br>
            in checkout without using promotional financing!
          </div>
        </div>
        <div className="w-[90px] mr-4 mt-4">
          <img src="https://media.sweetwater.com/m/include/promo/2023/sw-bb-cards-sm.png?width=158&height=100" />
        </div>
      </div>
      <div className="flex justify-end mr-3 pb-4">
        <div className="bg-[#3b7d1b] text-white font-semibold py-2 px-20 rounded">
          CHECKOUT
        </div>
      </div>
    </section>
  );
}
