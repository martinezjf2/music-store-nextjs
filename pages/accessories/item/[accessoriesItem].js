// pages/accessories/item/[item].js
import ItemDetail from "@/components/pages/ItemDetail";
import { musicStore } from "@/components/data.js";
import { CartProvider } from "@/context/CartContext";

export default function ItemPage({ item, storeName }) {
  return (
    <CartProvider>
      <div>
        <ItemDetail item={item} storeName={storeName} />
      </div>
    </CartProvider>
  );
}

// Use `getStaticPaths` to pre-generate paths for all items in the store
export async function getStaticPaths() {
  // Generate paths for all items, including the store name in the item details
  const paths = musicStore.accessories.items.map((item) => ({
    params: { accessoriesItem: item.name }, // Only include the item parameter
  }));

  return { paths, fallback: false }; // Return only the paths
}

// Use `getStaticProps` to fetch item data
export async function getStaticProps({ params }) {
  const itemName = params.accessoriesItem; // Access item through the new parameter name
  const item = musicStore.accessories.items.find((i) => i.name === itemName);

  if (!item) {
    return { notFound: true };
  }

  return {
    props: {
      item,
      storeName: musicStore.accessories.name, // Pass store name to the component
    },
  };
}
