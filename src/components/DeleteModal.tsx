import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import cn from "@/utils/cn";
import { ModalVariantType, ResponseType } from '@/types';
import Loader from '@/components/loader/Loader';


type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onDelete: () => Promise<{ok: boolean}>;
  variant: ModalVariantType;
};

const DeleteModal = ({ isOpen, setIsOpen, onDelete, variant }: Props) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const buttonCommonStyles = 'w-22 h-10 font-medium text-xl rounded-lg pb-[2px] px-4 hover:opacity-80 disabled:hover:opacity-100';

  const handleDelete = async () => {
    setIsLoading(true);

    try {
      const res = await onDelete() as ResponseType;
      if (res.ok) {
        navigate(0);
      } else {
        setErrorMessage(res.message);
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className={cn('fixed items-center inset-0 bg-black/30 z-50 justify-center overflow-auto', isOpen ? 'flex' : 'hidden')}>
      <div className="
        flex 
        flex-col 
        gap-4 
        p-4 
        bg-gray-100 
        rounded-md 
        shadow-lg  
        w-fit 
        max-w-lg
        mx-2
        h-fit
      ">
        <h4 className="text-gray-600 text-lg font-medium text-center">
          Do you want to delete this {variant}
        </h4>
        <p className='text-red-500 text-center font-medium'>{errorMessage && errorMessage}</p>
        <div className="flex items-center gap-3 justify-center">
          <button
            type="button"
            className={`${buttonCommonStyles} text-gray-600 border-gray-600 border`}
            onClick={() => setIsOpen(false)}
            disabled={isLoading}
          >
            Cancel
          </button>
          <button
            type="button"
            className={`${buttonCommonStyles} disabled:bg-gray-400 bg-red-600 text-white`}
            onClick={handleDelete}
            disabled={isLoading}
          >
            {
              isLoading
              ?
              <Loader 
                size={2}
                isDark={true}
              />
              :
              <span>Delete</span>
            }
          </button>
        </div>
      </div> 
    </div>
  );
};

export default DeleteModal;