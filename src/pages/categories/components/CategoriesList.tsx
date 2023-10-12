import { useEffect, useState } from "react";

import { CategoryType } from "@/types";
import getAllCategories from "@/actions/getAllCategories";

import CategoryCard from "./CategoryCard";

const CategoriesList = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const strCategories = JSON.stringify(categories);

  useEffect(() => {
    getAllCategories()
      .then(data => setCategories(data));
  }, [strCategories]);
  
  return (
    <section className="mt-10 space-y-2">
      {
        categories.map(({ id, label, itemsQty }) => (
          <CategoryCard 
            key={id}
            label={label} 
            itemsQty={itemsQty}
            id={id}
          />
        ))
      }
    </section>
  );
};

export default CategoriesList;