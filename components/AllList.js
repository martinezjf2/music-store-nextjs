// Make sure this component is usable for all pages for guitars, drums, and more
import React from "react";
import Item from "./Item";

export default function AllList({ store }) {
  const itemList = store.items.map((item, i) => <Item key={ i} item={item} />)
  const contentList = store.content.map((p, i) => (
    <p key={ i } className="font-extralight pb-5">{p}</p>
  ));

  return (
    <>
      <section className="mx-auto relative px-10 py-6 ">
        <div>
          <a href="/">Home</a> / <span className="font-bold">{store.name}</span>
        </div>
        <div className="text-[40px] font-bold tracking-wider pt-3 pb-8">
          {store.name}
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-1">This is the search section</div>
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
