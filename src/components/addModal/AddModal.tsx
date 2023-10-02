import useAddModalContext from "@/context/addModalContext/useAddModalContext";
import cn from "@/utils/cn";
import AddModalForm from "./AddModalForm";

const AddModal = () => {
  const { isOpen } = useAddModalContext();

  return (
    <div className={cn('fixed inset-0 bg-black/30 z-50 justify-center items-center', isOpen ? 'flex' : 'hidden')}>
      <AddModalForm />
    </div>
  );
};

export default AddModal;