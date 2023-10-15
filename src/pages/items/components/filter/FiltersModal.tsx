import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import getAllCategories from "@/actions/getAllCategories";
import { CategoryType } from "@/types";
import cn from "@/utils/cn";

import Buttons from "./Buttons";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type FiltersType = {
  categories: string[];
  promo: boolean;
}

const FiltersModal = ({ isOpen, setIsOpen }: Props) => {
  const navigate = useNavigate();
  const [sp, setSp] = useSearchParams();
  
  const filters = useRef<FiltersType>({
    categories: sp.get('categories') ? sp.get('categories')!.split(',') : [],
    promo: sp.get('promo') === 'true' ? true : false
  });

  const [categories, setCategories] = useState<CategoryType[]>([]);
  const strCategories = JSON.stringify(categories);

  const handleCategoryFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const checked = e.target.checked;
    const prev = filters.current;

    if (!prev?.categories?.includes(name) && checked) {
      filters.current.categories.push(name);
    } else if (prev.categories.includes(name) && !checked) {
      filters.current.categories = prev.categories.filter(c => c !== name);
    }
  };

  const handlePromoFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    filters.current.promo = checked;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const categories = filters.current.categories;
    const promo = filters.current.promo;

    setSp(prev => {
      if (!categories.length) {
        prev.delete('categories');
      } else {
        prev.set('categories', categories.join(','));
      }

      if (!promo) {
        prev.delete('promo');
      } else {
        prev.set('promo', 'true');
      }

      return prev;
    });
    
    navigate(0);
  };
  
  useEffect(() => {
    getAllCategories()
      .then(res => setCategories(res));
  }, [strCategories]);


  return (
    <form 
      className={cn("bg-slate-300 p-3 rounded-xl shadow-md absolute right-0 top-full min-w-[200px] max-w-xs", isOpen ? 'block' : 'hidden')}
      onSubmit={handleSubmit}
    >
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
                  defaultChecked={filters.current.categories.includes(category.id)}
                  onChange={handleCategoryFilter}
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
          defaultChecked={filters.current.promo}
          onChange={handlePromoFilter}
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