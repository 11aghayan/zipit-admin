const Quantity = () => {
  return (
    <div className="text-gray-900">
      <label 
        htmlFor="qty"
        className="block"
      >
        Qty
      </label>
      <input 
        name="qty"
        id="qty"
        type="number"
        style={{
          width: '7rem'
        }}
        placeholder="Quantity"
        min={0}
        defaultValue={0}
      />
    </div>
  );
};

export default Quantity;