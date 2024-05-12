export default function CheckoutPage({ cartArray }) {
  // useState for the totalAmount as float
  let item = {
    name: "Epiphone Thunderbird '64 Bass",
    description:
      "The Epiphone Thunderbird '64 bass brings back the iconic look and sound of the classic Thunderbird bass. With its distinctive shape created by legendary car designer Ray Dietrich and its sustain-enhancing neck-through-body construction, the Thunderbird '64 retains all the vintage vibe of the original Thunderbirds. This iconic bass has the distinctive and eye-catching Thunderbird body shape that vintage bassists know and love. Its sustain-enhancing neck-through-body construction provides excellent resonance for a full-bodied tone. This Thunderbird '64 retains vintage-accurate appointments like the three-ply pickguard with the hot-stamped Thunderbird logo, taking you back to the era of the original Thunderbirds. Where the Thunderbird '64 excels is in combining these vintage aesthetics with modern upgrades for rock-solid tuning and playability. The powerful ProBucket humbucker pickups deliver that deep, rich Thunderbird growl, while the Graph Tech nut and accurate Grover tuners keep your bass sounding pitch-perfect. Once you plug it in, you'll be amazed by the deep, rich tone from its powerful humbucker pickups, brought to life with top-notch CTS potentiometers.",
    price: "849.00",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/M04078000003000-00-600x600.jpg",
    special: "On Sale",
    condition: "New",
  };

  return (
    <section className="w-8/12 mx-auto shadow-2xl rounded-bl-md mb-8 rounded-br-md relative">
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

      {/* This is one item */}
      <div className="flex mb-5 mt-4 mx-1">
        <div className="w-2/12">
          <img src={item.image} />
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
          <div className="text-red-600 text-[10px]">
            Or earn <span className="font-bold">$65.00 back</span> in Bonus
            Bucks when you use you GuitarStore Card.
          </div>
        </div>
        <div className="flex justify-end w-2/12">
          <div className="w-6/12 text-right font-bold text-[14px] mr-4">
            1 <br></br>{" "}
            <span className="text-[#0a3b6b] hover:underline hover:cursor-pointer text-[10px] font-light">
              Remove
            </span>
          </div>
          <div className="w-6/12 text-right font-bold text-[14px] mr-2">
            ${item.price}
          </div>
        </div>
      </div>

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
          <div className="text-[#3b7d1b] text-[12px] font-bold">
            GET $65.00 IN BONUS BUCKS!
          </div>
          <div className="pl-[9rem] text-[10px]">
            The cart qualifies in Bonus Bucks when you use the GuitarStore Card
            <br></br>
            in checkout without using promotional financing!
          </div>
        </div>
        <div className="w-[90px] mr-4 mt-4">
          <img src="https://media.sweetwater.com/m/include/promo/2023/sw-bb-cards-sm.png?width=158&height=100" />
        </div>
      </div>
      <div className="flex justify-end mr-3 pb-4">
        <div className="bg-[#3b7d1b] text-white font-semibold py-2 px-20 rounded hover:cursor-pointer">
          CHECKOUT
        </div>
      </div>
    </section>
  );
}
