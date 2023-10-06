import { useRef } from "react";

import useAddModalContext from "@/context/addModalContext/useAddModalContext";
import { ItemFormType } from "@/types";
import handleItemSubmit  from "@/utils/handleItemSubmit";

import AddModalButtons from "./AddModalButtons";
import CategoryForm from "./CategoryForm";
import ItemForm from "./ItemForm";

const AddModalForm = () => {
  const { variant } = useAddModalContext();

  const queryRef = useRef<ItemFormType>({
    categories: [],
    name: '',
    price: 0,
    qty: 0
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (variant === 'item') {
      handleItemSubmit(e, queryRef);
    }
  };

  return (
    <form 
      className="
        flex 
        flex-col 
        gap-4 
        p-3 
        bg-gray-100 
        rounded-md 
        shadow-lg  
        w-full 
        max-w-lg
        mx-2
      "
      onSubmit={handleSubmit}
    >
        {
          variant === 'category'
          ?
          <CategoryForm />
          :
          <ItemForm />
        }
        <AddModalButtons />
      </form>
  );
};

export default AddModalForm;