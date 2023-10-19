import { useEffect, useState } from "react";

import { CategoryType } from "@/types";
import getAllCategories from "@/actions/getAllCategories";
import TextLoader from "@/components/loader/TextLoader";

import CategoryCard from "./CategoryCard";

const CategoriesList = () => {
  const [categories, setCategories] = useState<CategoryType[] | null>(null);
  const strCategories = JSON.stringify(categories);

  useEffect(() => {
    getAllCategories()
      .then(data => setCategories(data));
  }, [strCategories]); 

  return (
    <section className="mt-10 space-y-2">
      {
        !categories
        ?
        <TextLoader 
          size={1}
        />
        :
        !categories.length
        ?
          <p className="text-gray-900 text-center text-lg mx-auto">No Categories</p>
        :
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