import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import deleteItem from '@/actions/deleteItem';
import { useNavigate } from 'react-router-dom';
import useAddModalContext from '@/context/addModalContext/useAddModalContext';
import { ItemType } from '@/types';

type Props = {
  data: ItemType;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

const Buttons = ({ 
  data,
  setErrorMessage 
}: Props) => {
  const { toggleOpen, setVariant, setData, setRequest } = useAddModalContext();
  const navigate = useNavigate();

  const handleDelete = () => {
    setErrorMessage('');
    deleteItem(data.id)
      .then(res => {
        if (res.ok) {
          navigate(0);
        } else {
          setErrorMessage('Something went wrong. Item not deleted');
        }
      });
  };

  const handleChange = () => {
    setData(data);
    setVariant('item');
    setRequest('put');
    toggleOpen();
  };

  return (
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
  );
};

export default Buttons;