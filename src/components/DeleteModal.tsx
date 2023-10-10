import { useNavigate } from 'react-router-dom';

import cn from "@/utils/cn";

import { useState } from 'react';

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onDelete: () => Promise<{ok: boolean}>;
  variant: 'category' | 'item';
};

const DeleteModal = ({ isOpen, setIsOpen, onDelete, variant }: Props) => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const buttonCommonStyles = 'font-medium text-xl rounded-lg pb-[2px] px-4 hover:opacity-80';

  const handleDelete = async () => {
    const res = await onDelete();

    if (res.ok) {
      navigate(0);
    } else {
      setErrorMessage(`Something went wrong. ${<p className='capitalize'>{variant}</p>} not deleted`);
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
        <h4 className="text-gray-600 text-2xl font-medium text-center">
          Do you want to delete this {variant}
        </h4>
        <p className='text-red-500 text-center font-medium'>{errorMessage && errorMessage}</p>
        <div className="flex items-center gap-3 justify-center">
          <button
            type="button"
            className={`${buttonCommonStyles} text-gray-600 border-gray-600 border`}
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            className={`${buttonCommonStyles} bg-red-600 text-white`}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div> 
    </div>
  );
};

export default DeleteModal;