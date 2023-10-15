type Props = {
  children: React.ReactNode;
  handleClick: () => void;
  isActive: boolean;
}

const PageButton = ({ children, handleClick, isActive }: Props) => {

  return (
    <button 
      className="
      bg-gray-300 
      p-2 
      rounded-xl 
      hover:opacity-75
      text-lg
      text-gray-900
      font-medium
      min-w-[100px]
      disabled:bg-gray-200
      disabled:hover:opacity-100
      disabled:text-gray-400
    "
    onClick={handleClick}
    disabled={!isActive}
    >
      {children}
    </button>
  );
};

export default PageButton;