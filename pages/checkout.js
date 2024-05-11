export default function CheckoutPage({ cartArray }) {
  return (
    <section className="w-7/12 mx-auto">
      <div className="mt-3 flex">
        <div className="bg-[#015c96] text-white py-[7px] flex justify-center items-center w-11 rounded-tl-md">
          <i class="fa-solid fa-cart-shopping text-[22px]"></i>
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
          
    </section>
  );
}
