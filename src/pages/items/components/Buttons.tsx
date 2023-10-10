import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import useAddModalContext from '@/hooks/useAddModalContext';
import { ItemType } from '@/types';
import DeleteModal from '@/components/DeleteModal';
import deleteItem from '@/actions/deleteItem';

type Props = {
  data: ItemType;
}

const Buttons = ({ data }: Props) => {
  const { toggleOpen: toggleAdd, setVariant, setData, setRequest } = useAddModalContext();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const deleteFunc = async () => {
    return await deleteItem(data.id);
  };
  

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const handleChange = () => {
    setData(data);
    setVariant('item');
    setRequest('put');
    toggleAdd();
  };

  return (
    <>
      {
        isDeleteModalOpen && 
        <DeleteModal 
          isOpen={isDeleteModalOpen} 
          setIsOpen={setIsDeleteModalOpen}
          onDelete={deleteFunc}
          variant='item'
        />
      }
      <div
        className='flex gap-3 justify-between border-t border-gray-900 pt-1 mt-2'
      >
        <button
          type="button"
          className='text-xl hover:opacity-60'
          onClick={handleChange}
        >
          <FontAwesomeIcon icon={icon({name: 'pen-to-square'})} />
        </button>
        <button
          type="button"
          className='text-xl hover:opacity-60 text-red-500'
          onClick={handleDelete}
        >
          <FontAwesomeIcon icon={solid('trash')} />
        </button>
      </div>
    </>
  );
};

export default Buttons;