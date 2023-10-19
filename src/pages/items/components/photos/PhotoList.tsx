import { PhotoType } from "@/types";
import PhotoCard from "./PhotoCard";

type Props = {
  photos: PhotoType[];
  selectedPhoto: string;
  setSelectedPhoto: React.Dispatch<React.SetStateAction<string>>;
};

const PhotoList = ({ photos, selectedPhoto, setSelectedPhoto }: Props) => {
  

  return (
    <div className="border-b space-y-1 border-gray-900 py-2">
      {
        photos.map(photo => (
          <PhotoCard 
            key={photo.src}
            photo={photo}
            selectedPhoto={selectedPhoto}
            setSelectedPhoto={setSelectedPhoto}
          />
        ))
      }
    </div>
  );
};

export default PhotoList;