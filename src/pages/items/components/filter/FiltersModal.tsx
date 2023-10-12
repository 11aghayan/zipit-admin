import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import getAllCategories from "@/actions/getAllCategories";
import { CategoryType } from "@/types";
import Buttons from "./Buttons";
import cn from "@/utils/cn";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const FiltersModal = ({ isOpen, setIsOpen }: Props) => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const strCategories = JSON.stringify(categories);

  useEffect(() => {
    getAllCategories()
      .then(res => setCategories(res));
  }, [strCategories]);
  
  const sp = useSearchParams();


  return (
    <form className={cn("bg-slate-300 p-3 rounded-xl shadow-md absolute right-0 top-full min-w-[200px] max-w-xs", isOpen ? 'block' : 'hidden')}>
      <div className="border-b border-gray-900 pb-2">
        <h3 className="text-xl text-gray-900 font-medium">
          Categories
        </h3>
        <div className="flex gap-3 flex-wrap">
          {
            categories.map(category => (
              <div
                key={category.id}
                className="w-max flex gap-1 text-lg text-gray-900"
              >
                <input 
                  type="checkbox" 
                  name={category.id} 
                  id={category.id} 
                />
                <label 
                  htmlFor={category.id}
                >
                  {category.label.am}
                </label>
              </div>
            ))
          }
        </div>
      </div>
      <div className="flex items-center text-lg gap-1 border-b border-gray-900 pt-1 pb-2">
        <input 
          type="checkbox" 
          name="promo" 
          id="promo"
        />
        <label htmlFor="promo">Promo</label>
      </div>
      <Buttons 
        setIsOpen={setIsOpen}
      />
    </form>
  );
};

export default FiltersModal;