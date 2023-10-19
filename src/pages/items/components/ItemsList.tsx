import { useEffect } from "react";

import getAllItems from "@/actions/getAllItems";
import { ItemResponseType } from "@/types";

import ItemCard from "./ItemCard";
import TextLoader from "@/components/loader/TextLoader";

type Props = {
  items: ItemResponseType | null;
  setItems: React.Dispatch<React.SetStateAction<ItemResponseType | null>>;
};

const ItemsList = ({ items, setItems }: Props) => {

  useEffect(() => {
    getAllItems()
    .then(data => {
      setItems(data);
    });
  }, [setItems]);
  
  return (
    <section className="
        flex
        flex-wrap
        gap-4
        justify-center
        md:justify-start
      "
    >
      {
        !items
        ?
        <TextLoader
          size={1}
        />
        :
        !items.length
        ?
        <p className="text-gray-900 text-center text-lg mx-auto">No Items</p>
        :
        items.items.map(({
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
      }
    </section>
  );
};

export default ItemsList;