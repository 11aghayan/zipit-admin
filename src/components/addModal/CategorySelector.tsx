import { CategoryType } from "@/types";

type Props = {
  categories: CategoryType[];
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

const CategorySelector = ({ categories, category, setCategory }: Props) => {

    return (
    <div>
      {
        !categories.length
        ?
        <p>No Categories</p>
        :
        <label>
          <p>Category</p>
          <select 
            name="category"
            className="capitalize"
            defaultValue={category}
            onChange={e => setCategory(e.currentTarget.value)}
          >
            {
              categories.map(c => (
                <option 
                  key={c.label}
                  value={c.label}
                  className="capitalize"
                >
                  {c.label}
                </option>
              ))
            }
          </select>
        </label>
      }
    </div>
  );
};

export default CategorySelector;