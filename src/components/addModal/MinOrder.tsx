import { MinOrderType, MinOrderUnitType } from "@/types";

type Props = {
  minOrder: MinOrderType;
  setMinOrder: React.Dispatch<React.SetStateAction<MinOrderType>>;
};

const MinOrder = ({ minOrder, setMinOrder }: Props) => {
  
  return (
    <div className="flex items-center gap-2">
      <div>
        <label htmlFor="minOrderQty">
          Min. Order
        </label>
        <input 
          type="number" 
          name="minOrderQty" 
          id="minOrderQty"
          min={1}
          defaultValue={minOrder.qty}
          onChange={e => setMinOrder(prev => ({ ...prev, qty: Number(e.target.value) }))}
        />
      </div>
      <div>
        <label htmlFor="minOrderUnit">
          Unit
        </label>
        <select
          id="minOrderUnit"
          name="minOrderUnit"
          defaultValue='pcs'
          onChange={e => setMinOrder((prev): MinOrderType => ({ ...prev, unit: e.target.value as MinOrderUnitType }))}
        >
          <option value="pcs">Pcs</option>
          <option value="cm">Cm</option>
          <option value="box">Box</option>
        </select>
      </div>
    </div>
  );
};

export default MinOrder;