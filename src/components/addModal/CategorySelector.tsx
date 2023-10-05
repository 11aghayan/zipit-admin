const categories = ['shoes', 't-shirts', 'pants'];

const CategorySelector = () => {
  

  return (
    <div
      className="w-full p-2 bg-white border rounded-md border-gray-900 max-h-40 overflow-auto"
    >
      {
        !categories.length
        ?
        <p>No Categories</p>
        :
        categories.map(c => (
          <label 
            key={c}
            className="
              rounded-lg
              p-2
              flex
              items-center gap-3
              hover:bg-gray-200
              cursor-pointer
            "
          >
            <input 
              type="checkbox" 
              name={c}
            />
            <p 
              className="capitalize text-lg text-gray-900 font-medium"
            >
              {c}
            </p>
          </label>
        ))
      }
    </div>
  );
};

export default CategorySelector;