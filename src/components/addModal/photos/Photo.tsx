import Quantity from "@/components/addModal/Quantity";
import ColorName from "../ColorName";
import { PhotoType } from "@/types";

type Props = {
  photo: PhotoType;
  setPhotos: React.Dispatch<React.SetStateAction<PhotoType[]>>;
}

const EachPhoto = ({ photo, setPhotos }: Props) => {

  return (
    <div
      key={photo.src}
      className="flex items-center gap-2 p-2 border-b border-gray-900"
    >
      <img 
        src={photo.src} 
        alt="Item Photo" 
        width={100}
        className="rounded-xl border-2 border-gray-900 aspect-square"
      />
      <div className="space-y-3">
        <ColorName 
          photo={photo}
          setPhotos={setPhotos}
        />
        <Quantity 
          photo={photo}
          setPhotos={setPhotos}
        />
      </div>
    </div>
  );
};

export default EachPhoto;