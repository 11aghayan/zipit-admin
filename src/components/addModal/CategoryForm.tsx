import { useState } from "react";
import AddModalForm from "./AddModalForm";

const CategoryForm = () => {
  const [label, setLabel] = useState('');
  const [isError, setIsError] = useState(false);

  const onSubmit = () => {
    if (!label) return setIsError(true);
    setIsError(false);

    const body = JSON.stringify({ label });
    console.log(body);
  };
  
  return (
    <div className="pt-10 w-full flex justify-center">
      <AddModalForm
        submit={onSubmit}
      >
        <label htmlFor="label">
          Category Name
        </label>
        <input 
          id="label"
          type="text"
          name="category-name"
          value={label}
          onChange={e => setLabel(e.target.value)}
        />
        {isError && <p className="text-red-600 text-lg font-medium text-center">No label provided</p>}
      </AddModalForm>
    </div>
  );
};

export default CategoryForm;