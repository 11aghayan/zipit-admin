import { useEffect, useState } from "react";

import { ItemType } from "@/types";

import ItemCard from "./ItemCard";
import getAllItems from "@/actions/getAllItems";
import { useSearchParams } from "react-router-dom";

const ItemsList = () => {
  const [sp, setSp] = useSearchParams();
  
  const [items, setItems] = useState<ItemType[]>([]);
  const stringItems = JSON.stringify(items);

  useEffect(() => {
      if (!sp.get('page')) {
        setSp(prev => (
          {
            ...prev,
            page: 1
          }
        ));
      }
      getAllItems()
      .then(data => setItems(data.items));
  }, [stringItems, setSp, sp]);
  
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
        :
        <p>No items to show</p>
      }
    </div>
  );
};

export default ItemsList;