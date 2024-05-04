import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function Item({ item, storeName }) {
  const { name, description, price, image, special } = item;
  const router = useRouter()

  const handleClick = () => {
    router.push(`/${storeName.toLowerCase()}/${encodeURIComponent(name)}`)
  }
  return (
    <div
      className="border border-gray-700 rounded h-[470px] w-full py-5 px-4 relative bg-white hover:shadow-2xl hover:scale-105 transition"
      onClick={handleClick}
    >
      <div className="absolute">
        <div className="border p-1 w-[90px] flex justify-center items-center text-sm">{special}</div>
      </div>
      <div className="absolute right-5">
        <FontAwesomeIcon icon={faHeart} className="hover:cursor-pointer" />
      </div>
      <div className="flex justify-center items-center px-4 py-9">
        <img src={image} width={200} className="pt-3" />
      </div>
      <div className="mb-2 hover:cursor-pointer hover:underline">
        {name.length > 50 ? name.substring(0, 45) + "..." : name}
      </div>
      <div>
        {description.length > 50
          ? description.substring(0, 45) + "..."
          : description}
      </div>
      <div className="font-bold absolute bottom-3 pt-3">${price}</div>
    </div>
  );
}
