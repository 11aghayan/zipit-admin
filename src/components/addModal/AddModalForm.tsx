import useAddModalContext from "@/context/addModalContext/useAddModalContext";

import AddModalButtons from "./AddModalButtons";
import CategoryForm from "./CategoryForm";
import ItemForm from "./ItemForm";
import SpreadsheetForm from "./SpreadsheetForm";

const AddModalForm = () => {
  const { variant } = useAddModalContext();

  return (
    <form className="
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
      ">
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