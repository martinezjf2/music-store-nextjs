import React from 'react';

export default function Header() {
    return (
      <div className="flex w-[80%] mx-auto my-4">
        <div className="bg-black text-white h-[15rem] w-8/12 py-11 px-5 relative">
          <div className='font-bold text-[48px] mb-1'>Electric Guitar Month</div>
          <div className='text-[18px] font-light'>Deals, Special Financing, New Gear & More</div>
          <div className='absolute bottom-7'>
            <button className='bg-red-600 py-1.5 px-8 rounded font-semibold text-[13px]'>Shop Now</button>
            <span className='ml-6 font-semibold'>Ends April 30</span>
          </div>
        </div>

        <div className="bg-white text-blue-500 w-4/12 text-center ">
          <div>0%</div>
          <div>INTEREST</div>
          <div>FOR 48 MONTHS</div>
          <div>
            On qualifying products, 48 equal monthly payments required.
            Now-April 30.
          </div>
          <div>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    );
}