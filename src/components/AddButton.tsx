import useAddModalContext from "@/context/addModalContext/useAddModalContext";
import { ModalVariantType } from "@/types";

type Props = {
  label: string;
  variant: ModalVariantType;
}

const AddButton = ({ label, variant }: Props) => {
  const { toggleOpen, setVariant, setRequest } = useAddModalContext();

  const handleClick = () => {
    setRequest('post');
    setVariant(variant);
    toggleOpen();
  };
  
  return (
    <button
      className="bg-emerald-600 px-3 pt-1 pb-[6px] rounded-full text-white font-regular text-lg hover:brightness-110"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default AddButton;