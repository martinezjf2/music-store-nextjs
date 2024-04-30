import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart
} from "@fortawesome/free-regular-svg-icons";

export default function Item({ item }) {
  const { name, description, price, image, special } = item;
  return (
    <div className="border border-gray-700 rounded h-[450px] w-full py-5 px-4 relative bg-white hover:shadow-2xl hover:scale-105 transition">
      <div className="absolute">{ special }</div>
      <div className="absolute right-5"><FontAwesomeIcon icon={faHeart} /></div>
      <div className="flex justify-center items-center px-4 py-9">
        <img src={image} width={180}/>
      </div>
      <div className="pt-3">{name}</div>
      <div>{description.length > 50 ? description.substring(0, 50) + "..." : description}</div>
        <div className="font-bold absolute bottom-3">${price}</div>
    </div>
  );
}
