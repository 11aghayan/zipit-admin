import { useRef } from "react";

import useAddModalContext from "@/context/addModalContext/useAddModalContext";
import { ItemFormType } from "@/types";
import handleSubmit  from "@/utils/handleItemSubmit";

import AddModalButtons from "./AddModalButtons";
import CategoryForm from "./CategoryForm";
import ItemForm from "./ItemForm";
import SpreadsheetForm from "./SpreadsheetForm";

const AddModalForm = () => {
  const { variant } = useAddModalContext();

  const queryRef = useRef<ItemFormType>({
    categories: []
  });

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
      onSubmit={e => handleSubmit(e, queryRef)}
    >
        {
          variant === 'category'
          ?
          <CategoryForm />
          :
          variant === 'spreadsheet'
          ?
          <SpreadsheetForm /> 
          :
          <ItemForm />
          
        }
        <AddModalButtons />
      </form>
  );
};

export default AddModalForm;