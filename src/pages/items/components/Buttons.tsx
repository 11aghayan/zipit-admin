import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon, solid } from "@fortawesome/fontawesome-svg-core/import.macro";


const Buttons = () => {

  return (
    <div
      className='flex gap-3 justify-between border-t border-gray-900 pt-1 mt-2'
    >
      <button
        type="button"
        className='text-xl hover:opacity-60'
      >
        <FontAwesomeIcon icon={icon({name: 'pen-to-square'})} />
      </button>
      <button
        type="button"
        className='text-xl hover:opacity-60 text-red-500'
      >
        <FontAwesomeIcon icon={solid('trash')} />
      </button>
    </div>
  );
};

export default Buttons;