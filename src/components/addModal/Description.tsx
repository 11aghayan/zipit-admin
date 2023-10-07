import { LanguageStringType } from "@/types";

type Props = {
  description: LanguageStringType;
  setDescription: React.Dispatch<React.SetStateAction<LanguageStringType>>;
};

const Description = ({ description, setDescription }: Props) => {

  return (
    <>
      <div>
        <label htmlFor="descriptionAm">
          Description(AM)
        </label>
        <textarea 
          name="descriptionAm" 
          id="descriptionAm"
          className="min-h-[100px]"
          value={description.am}
          onChange={e => setDescription(prev => ({ ...prev, am: e.target.value }))}
        />
      </div>
      <div>
        <label htmlFor="descriptionRu">
          Description(RU)
        </label>
        <textarea 
          name="descriptionRu" 
          id="descriptionRu"
          className="min-h-[100px]"
          value={description.ru}
          onChange={e => setDescription(prev => ({ ...prev, ru: e.target.value }))}
        />
      </div>
    </>
  );
};

export default Description;