import { CategoryType } from "@/types";

type Props = {
  categories: CategoryType[];
  category: CategoryType;
  setCategory: React.Dispatch<React.SetStateAction<CategoryType>>;
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
            defaultValue={JSON.stringify(category)}
            onChange={e => setCategory(JSON.parse(e.currentTarget.value))
            }
          >
            {
              categories.map(c => (
                <option 
                  key={c.label.am}
                  value={JSON.stringify(c)}
                  className="capitalize"
                >
                  {c.label.am}
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