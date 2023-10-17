import { PhotoType } from "@/types";

type Props = {
  photo: PhotoType;
  setPhotos: React.Dispatch<React.SetStateAction<PhotoType[]>>;
}

const ColorName = ({ photo, setPhotos }: Props) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    
    setPhotos(prev => prev.map(p => {
      if (p.src === photo.src) {
        return {...p, color}; 
      } else {
        return p;
      }
    }));
  };
  
  return (
    <div className="text-gray-900">
      <label 
        htmlFor="color"
        className="block"
      >
        Color Name
      </label>
      <input 
        name="color"
        id="color"
        type="text"
        placeholder="e.g. Silver, Gold, Black"
        defaultValue={photo.color}
        onChange={handleChange}
      />
    </div>
  );
};

export default ColorName;