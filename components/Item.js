import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";

export default function Item({
  item,
  storeName,
  storePrimaryKey,
  setCount,
  onItemRemove,
  onItemSubmit,
}) {
  const { name, description, price, image, special } = item;
  const router = useRouter();

  const handleClick = () => {
    // Need to iterate through the storePrimaryKey and replace all underscores and switch them to dash
    let modifiedWord = storePrimaryKey.replace(/_/g, "-");
    router.push(`/${modifiedWord.toLowerCase()}/${encodeURIComponent(name)}`);
  };

  function classForBackgroundColor() {
    if (special == "New Arrival") {
      return "bg-blue-600";
    } else if (special == "On Sale" || special == "Restock") {
      return "bg-red-500";
    } else if (special == "Top-Seller" || special == "Download") {
      return "bg-gray-900";
    }
  }

  return (
    <div className="border border-gray-700 rounded h-[470px] w-full py-5 px-4 relative bg-white hover:shadow-2xl hover:scale-105 transition">
      {special ? (
        <div className="absolute">
          <div
            className={`border p-1 w-[90px] flex justify-center items-center text-[12px] font-bold tracking-wide text-white ${classForBackgroundColor()}`}
          >
            {special}
          </div>
        </div>
      ) : null}
      <div className="absolute right-5">
        <FontAwesomeIcon icon={faHeart} className="hover:cursor-pointer" />
      </div>
      <div className="flex justify-center items-center px-4 py-9">
        {/* <img src={image} width={200} className="pt-3" /> */}
        <Image
          src={image}
          alt={image}
          width={200}
          height={200}
          className="pt-3"
        />
      </div>
      <div
        className="mb-2 hover:cursor-pointer hover:underline"
        onClick={handleClick}
      >
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
