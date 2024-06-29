import { PhotoType } from "@/types";
import { SetStateAction } from "react";

type Props = {
  photo: PhotoType;
  setPhotos: React.Dispatch<SetStateAction<PhotoType[]>>;
};

const Available = ({ photo, setPhotos }: Props) => {

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const available = e.target.value === 'true' ? true : false;
    setPhotos(prev => prev.map(p => {
      if (p.src === photo.src) {
        return {...p, available};
      } else {
        return p;
      }
    }));
  };
  
  return (
    <div className="text-gray-900">
      <label 
        htmlFor="qty"
        className="block"
      >
        Available
      </label>
      <select 
        name="available"
        id="available"
        style={{
          width: '7rem'
        }}
        onChange={handleChange}
      >
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
    </div>
  );
};

export default Available;