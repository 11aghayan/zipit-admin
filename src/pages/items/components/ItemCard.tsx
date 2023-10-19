import type { ItemType } from "@/types";
import ChangeDeleteButtons from "@/components/ChangeDeleteButtons";

import PhotoList from "./photos/PhotoList";
import CategoryLabel from "./CategoryLabel";
import ItemName from "./ItemName";
import Promo from "./Promo";
import SizeAndMinOrder from "./SizeAndMinOrder";
import Description from "./Description";
import { useState } from "react";
import SelectedPhoto from "./SelectedPhoto";

const ItemCard = ({ 
  name, 
  id,
  category,
  description, 
  minOrder, 
  price, 
  promo, 
  photos,
  size 
}: ItemType) => {
  const [selectedPhoto, setSelectedPhoto] = useState(photos[0]?.src || '');

  return (
    <article
      className="
        flex
        flex-col
        justify-between
        bg-gray-300
        p-2
        rounded-xl
        shadow-md
        w-fit
      "
    >
      <SelectedPhoto 
        selectedPhoto={selectedPhoto}
        photos={photos}
      />
      <CategoryLabel 
        category={category}
      />
      <ItemName 
        name={name}
      />  
      <Promo 
        promo={promo}
        price={price}
      />
      <SizeAndMinOrder 
        size={size}
        minOrder={minOrder}
      />
      <PhotoList 
        photos={photos}
        setSelectedPhoto={setSelectedPhoto}
        selectedPhoto={selectedPhoto}
      />
      <Description 
        description={description}
      />
      <ChangeDeleteButtons
        data={{ 
          name, 
          id,
          category,
          description, 
          minOrder, 
          price, 
          promo, 
          photos,
          size 
        }}
        variant='item'
      />
    </article>
  );
};

export default ItemCard;