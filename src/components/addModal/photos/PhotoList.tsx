import { PhotoType } from "@/types";
import Photo from "./Photo";

type Props = {
  photos: PhotoType[]
}

const PhotoList = ({ photos }: Props) => {
  console.log(photos);
  return (
    <div className="flex flex-col gap-2">
      {
        photos.map((p) => (
          <Photo 
            key={p.photo}
            src={p.photo}
          />
        ))
        }
    </div>
  );
};

export default PhotoList;