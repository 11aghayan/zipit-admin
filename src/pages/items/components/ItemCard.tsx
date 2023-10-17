import type { ItemType } from "@/types";
import ChangeDeleteButtons from "@/components/ChangeDeleteButtons";

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
        w-full
        max-w-[280px]
      "
    >
      <div className="text-orange-600 font-semibold text-lg text-center capitalize">
        <h3>
          {category.label.am}
        </h3>
        <h3>
          {category.label.ru}
        </h3>
      </div>
      <div className="flex gap-2 justify-center">
        <h3 className="text-gray-900 text-xl font-medium border-r border-gray-900 pr-2">
          {name.am}
        </h3>
        <h3 className="text-gray-900 text-xl font-medium">
          {name.ru}
        </h3>
      </div>  
      <p className="text-gray-900 text-lg text-center">
        {
          promo
          ?
          <>
            <span className="line-through">{price}</span>
            <span> / {promo} AMD</span>
          </>
          :
          <span>{price} AMD</span>
        }
      </p>
      <p className="text-gray-900 text-lg text-center">Size: {size.val} {size.unit}</p>
      <p className="text-gray-900 text-lg text-center capitalize">Min Order: {minOrder.qty} {minOrder.unit}</p>
      <div className="text-gray-900 text-md space-y-1 py-3 border-b border-gray-900">
        <p>
          {description.am}
        </p>
        <p>
          {description.ru}
        </p>
      </div>
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