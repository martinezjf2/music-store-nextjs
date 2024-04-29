import React from "react";

export default function Item({ item }) {
  const { name, description, price, image } = item;
  return (
    <div className="border border-gray-700 rounded h-[450px] w-full py-5 px-3 relative bg-white hover:shadow-2xl hover:scale-105 transition">
      <div className="absolute">On Sale</div>
      <div className="absolute right-3">Heart</div>
      <div>
        <img src={image} />
      </div>
      <div className="pt-3">{name}</div>
      <div>{description}</div>
        <div className="font-bold absolute bottom-3">${price}</div>
    </div>
  );
}
