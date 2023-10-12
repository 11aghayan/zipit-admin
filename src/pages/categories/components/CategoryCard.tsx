import { LanguageStringType } from "@/types";
import Buttons from "./Buttons";

type Props = {
  label: LanguageStringType;
};

const CategoryCard = ({ label }: Props) => {
  

  return (
    <article className="w-full flex justify-between bg-gray-300 rounded-full p-4">
      <div className="flex gap-2 text-gray-900 text-xl font-medium">
        <h3 className="border-r pr-2 border-gray-900">{label.am}</h3>
        <h3>{label.ru}</h3>
      </div>
      <div>
        <Buttons />
      </div>
    </article>
  );
};

export default CategoryCard;