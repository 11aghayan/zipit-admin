import useAddModalContext from "@/hooks/useAddModalContext";
import Loader from "../loader/Loader";

type Props = {
  isLoading: boolean;
}

const AddModalButtons = ({ isLoading }: Props) => {
  const { toggleOpen, setVariant, setData } = useAddModalContext();

  const handleCancel = () => {
    setData(null);
    toggleOpen();
    setVariant(null);
  };
  
  return (
    <div className="flex items-center justify-end gap-5">
      <button
        onClick={handleCancel}
        className="hover:bg-gray-200 p-2 rounded-xl w-16 h-10"
        type="button"
      >
        Cancel
      </button>
      <button
        className="
          flex 
          justify-center
          items-center
          bg-yellow-500 
          disabled:bg-gray-400 
          disabled:cursor-default
          disabled:hover:brightness-100
          w-16
          h-10
          p-2 
          pt-1 
          pb-[6px] 
          text-lg 
          rounded-xl 
          font-semibold 
          text-white 
          hover:brightness-105
        "
        type="submit"
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
          <span>Save</span>
        }
      </button>
    </div>
  );
};

export default AddModalButtons;