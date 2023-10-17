import { PhotoType } from "@/types";
import PhotoAdder from "./PhotoAdder";
import PhotoList from "./PhotoList";

type Props = {
  photos: PhotoType[];
  setPhotos: React.Dispatch<React.SetStateAction<PhotoType[]>>
};

const Photos = ({ photos, setPhotos }: Props) => {
  
  return (
    <section>
      <PhotoList 
        photos={photos}
      />
      <PhotoAdder 
        setPhotos={setPhotos}
      />
    </section>
  );
};

export default Photos;