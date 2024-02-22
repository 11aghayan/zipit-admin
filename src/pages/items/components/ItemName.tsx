import { LanguageStringType } from "@/types";

type Props = {
  name: LanguageStringType;
};

const ItemName = ({ name }: Props) => {
  return (
    <div className="flex gap-2 justify-center border-b border-gray-900 pb-2">
      <h3 className="text-gray-900 text-right text-xl font-medium border-r border-gray-900 pr-2 w-40 break-words">
        {name.am}
      </h3>
      <h3 className="text-gray-900 text-xl font-medium break-words w-40">
        {name.ru}
      </h3>
    </div>
  );
};

export default ItemName;