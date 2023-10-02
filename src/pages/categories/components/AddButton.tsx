import useAddModalContext from "@/context/addModalContext/useAddModalContext";

type Props = {
  label: string;
}

const AddButton = ({ label }: Props) => {
  const { toggleOpen } = useAddModalContext();
  
  return (
    <button
      className="bg-emerald-600 px-2 pt-[2px] pb-[4px] rounded-full text-white font-regular text-lg hover:brightness-110"
      onClick={toggleOpen}
    >
      {label}
    </button>
  );
};

export default AddButton;