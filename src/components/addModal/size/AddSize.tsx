import { SizeType } from "@/types";
import { Icon } from "@iconify/react/dist/iconify.js";

type Props = {
  setSize: React.Dispatch<React.SetStateAction<SizeType>>;
}

const AddSize = ({ setSize }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setSize(prev => {
      return { ...prev, values: [...prev.values, { available: true, value: 0 }] };
    });
  };
  
  return (
    <button 
      className="w-fit flex items-center gap-1 hover:bg-slate-300 p-1 rounded-md" 
      onClick={handleClick}
      type="button"
    >
      <Icon icon='material-symbols:add' fontSize='1.5rem' />
    </button>
  );
};

export default AddSize;