import useAddModalContext from "@/context/addModalContext/useAddModalContext";

const AddModalButtons = () => {
  const { toggleOpen, setVariant } = useAddModalContext();

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    toggleOpen();
    setVariant(null);
  };

  const handleSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    toggleOpen();
    setVariant(null);
  };
  
  return (
    <div className="flex items-center justify-end gap-5">
      <button
        onClick={handleCancel}
      >
        Cancel
      </button>
      <button
        onClick={handleSave}
        className="bg-yellow-500 px-2 pt-1 pb-[6px] text-lg rounded-xl font-semibold text-white hover:brightness-110"
      >
        Save
      </button>
    </div>
  );
};

export default AddModalButtons;