import AddButton from "@/components/AddButton";
import CategoriesList from "./components/CategoriesList";

const Categories = () => {
  
  return (
    <main>
      <AddButton 
        label="Add Category"
        variant="category"
      />
      <CategoriesList />
    </main>
  );
};

export default Categories;