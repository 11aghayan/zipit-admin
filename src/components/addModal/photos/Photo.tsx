import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import Quantity from "@/components/addModal/Quantity";
import { PhotoType } from "@/types";

import ColorName from "@/components/addModal/ColorName";

type Props = {
  photo: PhotoType;
  setPhotos: React.Dispatch<React.SetStateAction<PhotoType[]>>;
}

const EachPhoto = ({ photo, setPhotos }: Props) => {

  const handleDelete = () => {
    setPhotos(prev => prev.filter(p => p.src !== photo.src));
  };

  return (
    <div
      key={photo.src}
      className="relative flex items-start gap-2 p-2 border-b border-gray-900"
    >
      <div>
        <img 
          src={photo.src} 
          alt="Item Photo" 
          width={100}
          className="rounded-xl border-2 border-gray-900 aspect-square"
        />
      </div>
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
      <button 
        type="button"
        className="hover:bg-gray-200 p-1 rounded-md text-2xl absolute right-1 bottom-1 text-red-600"
        onClick={handleDelete}
      >
        <FontAwesomeIcon icon={solid('trash')} />
      </button>
    </div>
  );
};

export default EachPhoto;