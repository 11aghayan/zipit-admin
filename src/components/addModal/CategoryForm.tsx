import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useAddModalContext from "@/hooks/useAddModalContext";
import addCategory from "@/actions/addCategory";
import { CategoryType, LanguageStringType } from "@/types";
import editCategory from "@/actions/editCategory";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";

import AddModalForm from "./AddModalForm";

const CategoryForm = () => {
  const { data, request } = useAddModalContext();
  const currentData = data as CategoryType || null;

  const axios = useAxiosPrivate();

  const navigate = useNavigate();
  
  const [isLoading, setIsLoading] = useState(false);
  const [label, setLabel] = useState<LanguageStringType>(currentData?.label || { am: '', ru: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = () => {
    setIsLoading(true);
    
    if (!label.am) return setErrorMessage('No Armenian name provided');
    if (!label.ru) return setErrorMessage('No Russian name provided');
    setErrorMessage('');
    
    if (request === 'post') {
      const body = { label };
      addCategory(body, axios)
        .then(res => {
          if (res.ok) {
            navigate(0);
          } else {
            setErrorMessage(res.message);
          }
        })
        .finally(() => setIsLoading(false));
    } else if (request === 'put') {
      editCategory({ label }, currentData.id, axios)
          .then(res => {
            if (res.ok) {
              navigate(0);
            } else {
              setErrorMessage(res.message);
            }
          })
          .finally(() => setIsLoading(false));
    } else {
      setErrorMessage('Unknown request type');
    }
  };
  
  return (
    <div className="pt-10 w-full flex justify-center">
      <AddModalForm
        submit={onSubmit}
        isLoading={isLoading}
      >
        <div>
          <label htmlFor="label">
            Category Name(AM)
          </label>
          <input 
            id="label"
            type="text"
            name="category-name"
            value={label.am}
            onChange={e => setLabel(prev => ({...prev, am: e.target.value}))}
          />
        </div>
        <div>
          <label htmlFor="label">
            Category Name(RU)
          </label>
          <input 
            id="label"
            type="text"
            name="category-name"
            value={label.ru}
            onChange={e => setLabel(prev => ({ ...prev, ru: e.target.value }))}
          />
        </div>
        {errorMessage && <p className="text-red-600 text-lg font-medium text-center">{errorMessage}</p>}
      </AddModalForm>
    </div>
  );
};

export default CategoryForm;