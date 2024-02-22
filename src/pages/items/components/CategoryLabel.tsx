import { ItemCategoryType } from "@/types";

type Props = {
  category: ItemCategoryType;
};

const CategoryLabel = ({ category }: Props) => {
  return (
    <div className="text-orange-600 font-semibold text-lg text-center capitalize break-words">
      <h3>
        {category.name.am}
      </h3>
      <h3>
        {category.name.ru}
      </h3>
    </div>
  );
};

export default CategoryLabel;