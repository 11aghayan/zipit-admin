import { useEffect, useState } from "react";

import { ItemType } from "@/types";
import axios from '@/libs/axios';

import ItemCard from "./ItemCard";

const ItemsList = () => {
  const [items, setItems] = useState<ItemType[]>([]);

  useEffect(() => {
    axios.get('/items')
      .then(data => setItems(data.data))
      .catch(console.log);
  }, [items]);

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
        items.length&&
        items.map(({
          id,
          name,
          category,
          colors,
          description,
          minOrder,
          price,
          promo,
          size
        }) => (
          <ItemCard 
            key={id}
            id={id}
            name={name}
            category={category}
            colors={colors}
            description={description}
            minOrder={minOrder}
            price={price}
            promo={promo}
            size={size}
          />
        ))
      }
    </div>
  );
};

export default ItemsList;