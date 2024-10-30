// pages/guitars/[item].js
import ItemDetail from "@/components/pages/ItemDetail"; // Assuming you have a component named ItemDetail
import { musicStore } from "@/components/data.js"; // Import your music store data
import { CartProvider } from "@/context/CartContext"; // Adjust the import to match your CartContext path

export default function ItemPage({ item, storeName }) {
  return (
    <CartProvider>
      {" "}
      {/* Wrap your component in CartProvider */}
      <div>
        <ItemDetail
          item={item}
          storeName={storeName}
          // The following props can be removed since they are not used in ItemDetail:
          // cart, onItemRemove, onItemSubmit, setCount
        />
      </div>
    </CartProvider>
  );
}

export async function getServerSideProps({ params }) {
  console.log("Received params:", params);
  const { item: itemName } = params;

  console.log("Looking for item:", itemName);
  console.log("Available items:", musicStore.content_creators.items); // Log all available items

  const item = musicStore.content_creators.items.find(
    (item) => item.name === decodeURIComponent(itemName.replace(/%20/g, " "))
  );

  console.log("Found item:", item); // Log the found item or null if not found

  return {
    props: {
      item: item || null,
      storeName: musicStore.content_creators.name,
    },
  };
}
