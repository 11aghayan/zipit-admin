import { PhotoType } from "@/types";

type Props = {
  selectedPhoto: string;
  photos: PhotoType[];
};

const SelectedPhoto = ({ selectedPhoto }: Props) => {

  return (
    <div>
      {
        selectedPhoto &&
        <img 
          src={selectedPhoto} 
          alt="Photo"
          width={150} 
          className="aspect-square mx-auto shadow-md"
        />
      }
    </div>
  );
};

export default SelectedPhoto;