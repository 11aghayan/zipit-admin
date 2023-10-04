import useAddModalContext from "@/context/addModalContext/useAddModalContext";
import { ModalVariantType } from "@/types";

type Props = {
  label: string;
  variant: ModalVariantType;
}

const AddButton = ({ label, variant }: Props) => {
  const { toggleOpen, setVariant } = useAddModalContext();

  const handleClick = () => {
    setVariant(variant);
    toggleOpen();
  };
  
  return (
    <button
      className="bg-emerald-600 px-2 pt-[2px] pb-[4px] rounded-full text-white font-regular text-lg hover:brightness-110"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default AddButton;