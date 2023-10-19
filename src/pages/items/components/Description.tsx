import { LanguageStringType } from "@/types";

type Props = {
  description: LanguageStringType;
};

const Description = ({ description }: Props) => {
  return (
    <div className="text-gray-900 text-md space-y-1 py-3 border-b border-gray-900">
      <p>
        {description.am}
      </p>
      <p>
        {description.ru}
      </p>
    </div>
  );
};

export default Description;