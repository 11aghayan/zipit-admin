import { LanguageStringType } from "@/types";

type Props = {
  name: LanguageStringType;
  setName: React.Dispatch<React.SetStateAction<LanguageStringType>>;
}

const Name = ({ name, setName }: Props) => {

  return (
    <>
      <div>
        <label htmlFor="nameAm">
          Name(AM)
        </label>
        <input 
          id="nameAm"
          type="text"
          name="nameAm"
          value={name.am}
          onChange={e => setName(prev => ({ ...prev, am: e.target.value }))}
        />
      </div>
      <div>
        <label htmlFor="nameRu">
          Name(RU)
        </label>
        <input 
          id="nameRu"
          type="text"
          name="nameRu"
          value={name.ru}
          onChange={e => setName(prev => ({ ...prev, ru: e.target.value }))}
        />
      </div>
    </>
  );
};

export default Name;