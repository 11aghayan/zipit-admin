import { useState } from "react";
import AddModalForm from "./AddModalForm";
import useAddModalContext from "@/context/addModalContext/useAddModalContext";
import { useNavigate } from "react-router-dom";
import addCategory from "@/actions/addCategory";

const CategoryForm = () => {
  const { request } = useAddModalContext();
  const navigate = useNavigate();
  
  const [label, setLabel] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = () => {
    if (!label) return setErrorMessage('No label provided');
    setErrorMessage('');
    
    const body = { label };
    
    if (request === 'post') {
      addCategory(body)
        .then(res => {
          if (res.ok) {
            navigate(0);
          } else {
            setErrorMessage('Something went wrong');
          }
        });
    } else if (request === 'put') {
      console.log('PUT Request');
    } else {
      console.log('Unknown request type');
    }
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
        {errorMessage && <p className="text-red-600 text-lg font-medium text-center">{errorMessage}</p>}
      </AddModalForm>
    </div>
  );
};

export default CategoryForm;