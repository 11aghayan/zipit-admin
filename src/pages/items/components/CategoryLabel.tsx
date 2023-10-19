import { CategoryType } from "@/types";

type Props = {
  category: CategoryType;
};

const CategoryLabel = ({ category }: Props) => {
  return (
    <div className="text-orange-600 font-semibold text-lg text-center capitalize">
      <h3>
        {category.label.am}
      </h3>
      <h3>
        {category.label.ru}
      </h3>
    </div>
  );
};

export default CategoryLabel;