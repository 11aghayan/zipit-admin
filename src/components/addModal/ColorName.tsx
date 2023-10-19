import { PhotoType } from "@/types";

type Props = {
  photo: PhotoType;
  setPhotos: React.Dispatch<React.SetStateAction<PhotoType[]>>;
}

const ColorName = ({ photo, setPhotos }: Props) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, lang: 'am' | 'ru') => {
    const color = e.target.value;

    setPhotos(prev => prev.map(p => {
      if (p.src === photo.src) {
        return {...p, color: {
          ...p.color,
          [lang]: color
        }}; 
      } else {
        return p;
      }
    }));
    
  };
  
  return (
    <div className="text-gray-900">
      <div>
        <label 
          htmlFor="color"
          className="block"
        >
          Color Name(AM)
        </label>
        <input 
          name="colorAm"
          id="colorAm"
          type="text"
          defaultValue={photo.color.am}
          onChange={e => handleChange(e, 'am')}
        />
      </div>
      <div>
        <label 
          htmlFor="color"
          className="block"
        >
          Color Name(RU)
        </label>
        <input 
          name="colorRu"
          id="colorRu"
          type="text"
          defaultValue={photo.color.ru}
          onChange={e => handleChange(e, 'ru')}
        />
      </div>
    </div>
  );
};

export default ColorName;