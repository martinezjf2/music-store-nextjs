// pages/guitars/[item].js
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
  const paths = musicStore.bass.items.map((item) => ({
    params: { bassItem: item.name }, // Use item name directly without encoding
  }));

  return { paths, fallback: false };
}

// Use `getStaticProps` to fetch item data
export async function getStaticProps({ params }) {
  const itemName = params.bassItem;
  const item = musicStore.bass.items.find((i) => i.name === itemName);

  if (!item) {
    return { notFound: true };
  }

  return {
    props: {
      item,
      storeName: musicStore.bass.name,
    },
  };
}
