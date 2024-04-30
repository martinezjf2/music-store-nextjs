import React from "react";

export default function ItemDetail({ item, storeName }) {
  const { name, description, price, image, special } = item;

    console.log({item})
    return (
        <div>
            <h1>{ storeName }</h1>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{price}</p>
            <img src={image} />
            <p>{ special }</p>
    </div>
    )
}