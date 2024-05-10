import { useRouter } from "next/router";
import ItemDetail from "@/components/pages/ItemDetail" // Assuming you have a component named ItemDetail
import { musicStore } from "@/components/data.js"; // Import your music store data

export default function ItemPage({ item, storeName }) {
  return (
    <div>
      <ItemDetail item={item} storeName={ storeName } />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { item: itemName } = params;

  // Access the item data directly from your musicStore
  const item = musicStore.band_and_orchestra.items.find(
    (item) => item.name === decodeURIComponent(itemName)
  );

  return {
    props: {
      item: item || null,
      storeName: musicStore.band_and_orchestra.name// Return null if item is not found
    },
  };
}
