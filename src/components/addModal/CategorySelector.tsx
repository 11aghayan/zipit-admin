const categories = ['shoes', 't-shirts', 'pants'];

const CategorySelector = () => {
  

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
          >
            {
              categories.map(c => (
                <option 
                  key={c}
                  value={c}
                  className="capitalize"
                >
                  {c}
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