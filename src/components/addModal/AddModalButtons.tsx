import useAddModalContext from "@/hooks/useAddModalContext";

const AddModalButtons = () => {
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
        className="hover:bg-gray-200 p-2 rounded-xl"
        type="button"
      >
        Cancel
      </button>
      <button
        className="bg-yellow-500 p-2 pt-1 pb-[6px] text-lg rounded-xl font-semibold text-white hover:brightness-105"
        type="submit"
      >
        Save
      </button>
    </div>
  );
};

export default AddModalButtons;