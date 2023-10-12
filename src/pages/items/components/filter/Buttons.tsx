type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Buttons = ({ setIsOpen }: Props) => {
  
  const commonStyles = 'px-3 py-1 text-lg rounded-full pb-[6px]';

  return (
    <div className="w-full flex items-center justify-center gap-2 pt-2">
      <button 
        className={`${commonStyles} text-gray-900`}
        type="button"
        onClick={() => setIsOpen(false)}
      >
        Cancel
      </button>
      <button
        className={`${commonStyles} bg-orange-400 text-white`}
      >
        Filter
      </button>
    </div>
  );
};

export default Buttons;