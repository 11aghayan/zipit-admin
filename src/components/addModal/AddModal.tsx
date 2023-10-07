import useAddModalContext from "@/context/addModalContext/useAddModalContext";
import cn from "@/utils/cn";
import CategoryForm from "./CategoryForm";
import ItemForm from "./ItemForm";

const AddModal = () => {
  const { isOpen, variant } = useAddModalContext();

  return (
    <div className={cn('fixed inset-0 bg-black/30 z-50 justify-center overflow-auto', isOpen ? 'flex' : 'hidden')}>
      {
        variant === 'category'
        ?
        <CategoryForm />
        :
        variant === "item"
        ?
        <ItemForm />
        :
        <p>Something is wrong</p>
      }
    </div>
  );
};

export default AddModal;