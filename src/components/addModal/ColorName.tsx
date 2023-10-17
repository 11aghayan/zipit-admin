const ColorName = () => {
  return (
    <div className="text-gray-900">
      <label 
        htmlFor="color"
        className="block"
      >
        Color Name
      </label>
      <input 
        name="color"
        id="color"
        type="text"
        placeholder="e.g. Silver, Gold, Black"
      />
    </div>
  );
};

export default ColorName;