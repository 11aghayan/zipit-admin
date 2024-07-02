import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { PhotoType } from '@/types';
import { useEffect, useState } from 'react';

type Props = {
  setPhotos: React.Dispatch<React.SetStateAction<PhotoType[]>>;
}

const PhotoAdder = ({ setPhotos }: Props) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    if (!image) return;

    const fileObj = {
      src: image,
      color: {
        am: '',
        ru: ''
      }
    }; 

    setPhotos(prev => {
      const photoInPhotos = prev.find(p => p.src === fileObj.src);
      if (photoInPhotos) return prev;
      return [...prev, fileObj];
    });
  }, [image, setPhotos]);

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    
    if (!file) return;
    
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result as string);
    };
  };
  

  return (
    <div className='mt-3'>
      <div className="relative w-fit flex items-center gap-2 hover:bg-gray-300 p-2 rounded-xl">
        <FontAwesomeIcon 
          icon={regular('image')}  
          className='w-8 h-8'
        />
        <input 
          type="file"
          id='img'
          accept='image/*' 
          className="opacity-0 absolute inset-0 cursor-pointer"
          onChange={uploadImage}
        />
        <label htmlFor="img" className='text-gray-900'>Add Photo</label>
      </div>
    </div>
  );
};

export default PhotoAdder;