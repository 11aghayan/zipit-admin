import ChangeDeleteButtons from "@/components/ChangeDeleteButtons";
import { CategoryType } from "@/types";

type Props = CategoryType;

const CategoryCard = ({ label, itemsQty, id }: Props) => {
  

  return (
    <article className="w-full flex justify-between bg-gray-300 rounded-full p-4">
      <div className="flex gap-2 text-gray-900 text-md sm:text-xl font-medium">
        <h3 className="border-r pr-2 border-gray-900">{label.am}</h3>
        <h3 className="border-r pr-2 border-gray-900">{label.ru}</h3>
        <p>{itemsQty}</p>
      </div>
      <div>
        <ChangeDeleteButtons 
          data={{
            label,
            itemsQty,
            id
          }}
          variant='category'
        />
      </div>
    </article>
  );
};

export default CategoryCard;