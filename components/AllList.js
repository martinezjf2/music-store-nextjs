// Make sure this component is usable for all pages for guitars, drums, and more
import React from "react";
import Item from "./Item";
import Link from "next/link";
import Head from "next/head";

export default function AllList({
  store,
  cart,
  onItemSubmit,
  setCount,
  onItemRemove,
}) {
  const itemList = store.items.map((item, i) => (
    <Item
      key={i}
      item={item}
      storeName={store.name}
      storePrimaryKey={store.primary_name}
      setCount={setCount}
      onItemRemove={onItemRemove}
      onItemSubmit={onItemSubmit}
    />
  ));
  const contentList = store.content.map((p, i) => (
    <p key={i} className="font-extralight pb-5">
      {p}
    </p>
  ));

  return (
    <>
      <Head>
        <title>{store.name}</title>
      </Head>
      <section className="mx-auto relative px-10 py-6 ">
        <div className="flex justify-start items-center">
          <Link href="/">Home</Link>
          <div className="w-[5px] h-[5px] bg-black rounded-full flex justify-center items-center mx-3"></div>{" "}
          <span className="font-bold">{store.name}</span>
        </div>
        <div className="text-[40px] font-bold tracking-wider pt-3 pb-8">
          {store.name}
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <div className="border-b-2 w-11/12 py-5 px-2 flex justify-between items-center">
              <div className="font-bold tracking-wide">Find In Stores</div>
              <div className="text-gray-600 text-[20px] mr-5 hover:cursor-pointer">
                +
              </div>
            </div>
            <div className="border-b-2 w-11/12 py-5 px-2 flex justify-between items-center">
              <div className="font-bold tracking-wide">Availibility</div>
              <div className="text-gray-600 text-[20px] mr-5 hover:cursor-pointer">
                +
              </div>
            </div>
            <div className="border-b-2 w-11/12 py-5 px-2 flex justify-between items-center">
              <div className="font-bold tracking-wide">Category</div>
              <div className="text-gray-600 text-[20px] mr-5 hover:cursor-pointer">
                +
              </div>
            </div>
            <div className="border-b-2 w-11/12 py-5 px-2 flex justify-between items-center">
              <div className="font-bold tracking-wide">Savings & Specials</div>
              <div className="text-gray-600 text-[20px] mr-5 hover:cursor-pointer">
                +
              </div>
            </div>
            <div className="border-b-2 w-11/12 py-5 px-2 flex justify-between items-center">
              <div className="font-bold tracking-wide">Price</div>
              <div className="text-gray-600 text-[20px] mr-5 hover:cursor-pointer">
                +
              </div>
            </div>
            <div className="border-b-2 w-11/12 py-5 px-2 flex justify-between items-center">
              <div className="font-bold tracking-wide">Brand</div>
              <div className="text-gray-600 text-[20px] mr-5 hover:cursor-pointer">
                +
              </div>
            </div>
            <div className="border-b-2 w-11/12 py-5 px-2 flex justify-between items-center">
              <div className="font-bold tracking-wide">Customer Rating</div>
              <div className="text-gray-600 text-[20px] mr-5 hover:cursor-pointer">
                +
              </div>
            </div>
            <div className="border-b-2 w-11/12 py-5 px-2 flex justify-between items-center">
              <div className="font-bold tracking-wide">More ways to shop</div>
              <div className="text-gray-600 text-[20px] mr-5 hover:cursor-pointer">
                +
              </div>
            </div>
          </div>
          <div className="col-span-3 grid grid-cols-4 gap-3 justify-center items-center bg-gray-100 px-5 py-6">
            {itemList}
          </div>
        </div>
      </section>

      <section className="pt-9">
        <div className="px-9 pb-9 pt-6 border-t-2 border-gray-200 w-5/6 mx-auto">
          {contentList}
        </div>
      </section>
    </>
  );
}
