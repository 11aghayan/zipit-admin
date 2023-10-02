import AddModalButtons from "./AddModalButtons";

const AddModalForm = () => {

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
      ">
        <div>
          <label htmlFor="label">
            Category Name
          </label>
          <input 
            id="label"
            type="text" 
            className="
              mt-1 
              text-lg 
              text-gray-900 
              font-normal 
              px-2 
              py-1 
              w-full 
              border 
              border-gray-500 
              rounded-md
            "
          />
        </div>
        <AddModalButtons />
      </form>
  );
};

export default AddModalForm;