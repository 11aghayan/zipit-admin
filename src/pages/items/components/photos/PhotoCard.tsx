import { PhotoType } from "@/types";
import cn from "@/utils/cn";

type Props = {
  photo: PhotoType;
  selectedPhoto: string;
  setSelectedPhoto: React.Dispatch<React.SetStateAction<string>>;
};

const PhotoCard = ({ photo, selectedPhoto, setSelectedPhoto }: Props) => {
  
  const handleClick = () => {
    setSelectedPhoto(photo.src);
  };
  
  return (
    <article 
      className={cn("flex gap-2 hover:bg-gray-400 cursor-pointer p-1 rounded-xl", 
      selectedPhoto === photo.src ? 'bg-gray-400' : '')}
      onClick={handleClick}
    >
      <img 
        src={photo.src} 
        alt="Item Photo" 
        width={80}
        className="rounded-xl aspect-square"
      />
      <div>
        <p>Color AM: {photo.color.am}</p>
        <p>Color RU: {photo.color.ru}</p>
      </div>
    </article>
  );
};

export default PhotoCard;