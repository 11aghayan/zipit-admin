import type { ItemType } from "@/types";
import ChangeDeleteButtons from "@/components/ChangeDeleteButtons";

const ItemCard = ({ 
  name, 
  id,
  category, 
  colors, 
  description, 
  minOrder, 
  price, 
  promo, 
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
      <img 
        src="https://fakeimg.pl/600x400" 
        alt="placeholder" 
        width='200'
        height='200'
        className="mx-auto"
        loading="lazy"
      />
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
      <div className="flex gap-1 flex-wrap justify-center">
        {
          colors.map(c => (
            <div 
              key={c.color}
              className="flex flex-col items-center"
            >
              <div 
                className="w-9 aspect-square rounded-full border-2 border-black"
                style={{
                  backgroundColor: c.color
                }}
              />
              <p className="text-gray-900 text-lg">{c.qty}</p>
            </div>
          ))
        }
      </div>
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
          colors, 
          description, 
          minOrder, 
          price, 
          promo, 
          size 
        }}
        variant='item'
      />
    </article>
  );
};

export default ItemCard;