import { CategoryType, ItemCategoryType } from "@/types";
import TextLoader from "../loader/TextLoader";

type Props = {
  categories: CategoryType[] | null;
  category: ItemCategoryType;
  setCategory: React.Dispatch<React.SetStateAction<ItemCategoryType>>;
};

const CategorySelector = ({ categories, category, setCategory }: Props) => {

    return (
    <div>
      {
        !categories ?
        <TextLoader 
          size={1}
        />
        :
        <>
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
                onChange={e => {
                  console.log(e.currentTarget.value);
                  setCategory(JSON.parse(e.currentTarget.value));
                }
                }
              >
                {
                  categories.map(c => (
                    <option 
                      key={c.id}
                      value={JSON.stringify({ id: c.id, name: c.label })}
                      className="capitalize"
                    >
                      {c.label.am}
                    </option>
                  ))
                }
              </select>
            </label>
          }
        </>
      }
    </div>
  );
};

export default CategorySelector;