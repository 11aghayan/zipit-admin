import { PhotoType } from "@/types";
import { SetStateAction } from "react";

type Props = {
  photo: PhotoType;
  setPhotos: React.Dispatch<SetStateAction<PhotoType[]>>;
};

const Quantity = ({ photo, setPhotos }: Props) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const qty = Number(e.target.value);
    setPhotos(prev => prev.map(p => {
      if (p.src === photo.src) {
        return {...p, qty};
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
        Qty
      </label>
      <input 
        name="qty"
        id="qty"
        type="number"
        style={{
          width: '7rem'
        }}
        placeholder="Quantity"
        min={0}
        defaultValue={photo.qty}
        onChange={handleChange}
      />
    </div>
  );
};

export default Quantity;