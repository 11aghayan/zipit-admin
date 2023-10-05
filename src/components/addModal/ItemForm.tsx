import CategorySelector from "./CategorySelector";

const ItemForm = () => {

  return (
    <>
      <CategorySelector />
      <div>
        <label htmlFor="name">
          Name
        </label>
        <input 
          id="name"
          type="text"
          name="name"
        />
      </div>
      <div className="flex gap-3">
        <div>
          <label htmlFor="price">
            Price
          </label>
          <input 
            id="price"
            type="number"
            defaultValue={0}
            name="price"
          />
        </div>
        <div>
          <label htmlFor="qty">
            Quantity
          </label>
          <input 
            id="qty"
            type="number"
            defaultValue={0}
            name="qty"
          />
        </div>
      </div>
      <div className="block">
        <label htmlFor="description">
          Description
        </label>
        <textarea 
          name="description" 
          id="description"
          className="min-h-[100px]"
        />
      </div>
    </>
  );
};

export default ItemForm;