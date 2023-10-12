import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const FilterButton = ({ setIsOpen }: Props) => {

  return (
    <button
      type="button"
      className="text-xl text-gray-700 hover:bg-gray-300 p-2 rounded-lg"
      onClick={() => setIsOpen(prev => !prev)}
    >
      <FontAwesomeIcon icon={icon({ name: 'filter' })} />
    </button>
  );
};

export default FilterButton;