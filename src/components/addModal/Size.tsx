import { SizeType, SizeUnitType } from "@/types";

type Props = {
  size: SizeType;
  setSize: React.Dispatch<React.SetStateAction<SizeType>>;
};

const Size = ({ size, setSize }: Props) => {

  return (
    <div className="flex gap-2 justify-between">
      <div className="w-full">
        <label htmlFor="size">
          Size
        </label>
        <input 
          id="size"
          type="number"
          name="size"
          min={0}
          step='0.1'
          defaultValue={size.val}
          onChange={e => setSize(prev => ({ ...prev, val: Number(e.target.value) }) )}
        />
      </div>
      <div>
        <label htmlFor="sizeUnit">
          Unit
        </label>
        <select 
          name="sizeUnit" 
          id="sizeUnit"
          defaultValue={size.unit}
          onChange={e => setSize(prev => ({ ...prev, unit: e.target.value as SizeUnitType }) )}
        >
          <option value="mm">mm</option>
          <option value="cm">cm</option>
          <option value="m">m</option>
        </select>
      </div>
    </div>
  );
};

export default Size;