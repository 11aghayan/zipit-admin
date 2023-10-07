import AddModalForm from "./AddModalForm";

const CategoryForm = () => {

  const onSubmit = () => {
    
  };
  
  return (
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
      />
    </AddModalForm>
  );
};

export default CategoryForm;