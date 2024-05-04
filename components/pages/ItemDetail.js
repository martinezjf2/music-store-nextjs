import React from "react";

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
          <span className="font-bold">{item.name}</span>
        </div>

        <div className="mt-12 flex justify-around py-7 border-t-2 w-11/12 mx-auto">
          <div className="border-r w-8/12">
            <img src={image} className="w-[800px]" />
          </div>
          <div className="w-4/12 text-left pl-9 mt-2">
            <div
              className={`border p-1 w-[130px] flex justify-center items-center`}
            >
              {special}
            </div>

            <div className="pt-4 font-extrabold tracking-wide text-[32px]">
              {name}
            </div>
            <div>stars</div>
            <div className="font-bold text-[24px] pb-5">${price}</div>
            <hr className="font-extrabold "></hr>
          </div>
        </div>
      </section>
    </>
  );
}
