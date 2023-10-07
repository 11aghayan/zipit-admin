type Props = {
  addQty: (color:string, qty: number) => void;
  color: string;
};

const Quantity = ({ addQty, color }: Props) => {
  return (
    <div>
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
        onChange={e => addQty(color, Number(e.currentTarget.value))
        }
      />
    </div>
  );
};

export default Quantity;