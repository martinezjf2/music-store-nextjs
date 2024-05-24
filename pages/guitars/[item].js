import { useRouter } from "next/router";
import ItemDetail from "@/components/pages/ItemDetail" // Assuming you have a component named ItemDetail
import { musicStore } from "@/components/data.js"; // Import your music store data

export default function ItemPage(props) {
  return (
    <div>
      <ItemDetail item={props.item} storeName={props.storeName} cart={props.cart } onItemRemove={ props.onItemRemove} onItemSubmit={ props.onItemSubmit} setCount={props.setCount } />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  console.log(params)
  const { item: itemName } = params;

  // Access the item data directly from your musicStore
  const item = musicStore.guitars.items.find(
    (item) => item.name === decodeURIComponent(itemName)
  );

  return {
    props: {
      item: item || null,
      storeName: musicStore.guitars.name,
      // Return null if item is not found
    },
  };
}
