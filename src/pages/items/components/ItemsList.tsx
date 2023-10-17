import { useEffect } from "react";

import getAllItems from "@/actions/getAllItems";
import { ItemResponseType, ItemType } from "@/types";

import ItemCard from "./ItemCard";

type Props = {
  items: ItemType[];
  setItems: React.Dispatch<React.SetStateAction<ItemResponseType | null>>;
};

const ItemsList = ({ items, setItems }: Props) => {

  useEffect(() => {
    getAllItems()
    .then(data => setItems(data));
  }, [setItems]);
  
  return (
    <div className="
        flex
        flex-wrap
        gap-4
        justify-center
        md:justify-start
      "
    >
      {
        items.length ?
        items.map(({
          id,
          name,
          category,
          description,
          minOrder,
          price,
          promo,
          photos,
          size
        }) => (
          <ItemCard 
            key={id}
            id={id}
            name={name}
            category={category}
            description={description}
            minOrder={minOrder}
            price={price}
            promo={promo}
            photos={photos}
            size={size}
          />
        ))
        :
        <p>No items to show</p>
      }
    </div>
  );
};

export default ItemsList;