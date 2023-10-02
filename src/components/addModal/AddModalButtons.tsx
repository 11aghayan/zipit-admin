import useAddModalContext from "@/context/addModalContext/useAddModalContext";
const AddModalButtons = () => {
  const { toggleOpen } = useAddModalContext();
  
  return (
    <div className="flex items-center justify-end gap-5">
      <button
        onClick={e => {
          e.preventDefault();
          toggleOpen();
        }}
      >
        Cancel
      </button>
      <button
        className="bg-yellow-500 px-2 pt-1 pb-[6px] text-lg rounded-xl font-semibold text-white hover:brightness-110"
      >
        Save
      </button>
    </div>
  );
};

export default AddModalButtons;