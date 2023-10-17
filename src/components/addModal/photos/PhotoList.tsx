import { PhotoType } from "@/types";
import Photo from "./Photo";

type Props = {
  photos: PhotoType[];
  setPhotos: React.Dispatch<React.SetStateAction<PhotoType[]>>;
}

const PhotoList = ({ photos, setPhotos }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {
        photos.map((p) => (
          <Photo 
            key={p.src}
            photo={p}
            setPhotos={setPhotos}
          />
        ))
        }
    </div>
  );
};

export default PhotoList;