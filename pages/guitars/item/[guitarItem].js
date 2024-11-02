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

// Adjust for the new dynamic parameter name: guitarItem
export async function getStaticPaths() {
  const paths = musicStore.guitars.items.map((item) => ({
    params: { guitarItem: item.name },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const guitarName = params.guitarItem;
  const item = musicStore.guitars.items.find((i) => i.name === guitarName);

  if (!item) {
    return { notFound: true };
  }

  return {
    props: {
      item,
      storeName: musicStore.guitars.name,
    },
  };
}
