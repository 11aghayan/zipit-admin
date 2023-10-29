import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import useAddModalContext from '@/hooks/useAddModalContext';
import { CategoryType, ItemType, ModalVariantType } from '@/types';
import DeleteModal from '@/components/DeleteModal';
import deleteItem from '@/actions/deleteItem';
import deleteCategory from '@/actions/deleteCategory';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';

type Props = {
  data: ItemType | CategoryType;
  variant: ModalVariantType
}

const ChangeDeleteButtons = ({ data, variant }: Props) => {
  const { toggleOpen: toggleAdd, setVariant, setData, setRequest } = useAddModalContext();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const axios = useAxiosPrivate();

  const deleteFunc = async () => {
    if (variant === 'item') return await deleteItem(data.id, axios);
    if (variant === 'category') return await deleteCategory(data.id, axios);
    return { ok: false };
  };
  

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const handleChange = () => {
    setData(data);
    setVariant(variant);
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
          variant={variant}
        />
      }
      <div
        className='flex gap-3 justify-between'
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

export default ChangeDeleteButtons;