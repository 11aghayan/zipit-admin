import { Icon } from '@iconify/react';

import { SizeType, SizeUnitType } from "@/types";

type Props = {
  size: SizeType;
  setSize: React.Dispatch<React.SetStateAction<SizeType>>;
};

const Size = ({ size, setSize }: Props) => {

  const handleDelete = (index: number) => {
    return () => {
      if (size.values.length > 1) {
        setSize(prev => {
          const values = prev.values.filter((_v, i) => i !== index);
          return { ...prev, values };
        });
      }
    };
  };

  return (
    <div className="flex gap-2 justify-between">
      <div className="grid sm:grid-cols-2 gap-1">
        {
          size.values.map((_val, i) => (
            <div className="w-full" key={i}>
              <div className='flex justify-between'>
                <label htmlFor={`size-${i}`}>
                  Size
                </label>
                <button 
                  className='text-red-600 hover:opacity-70'
                  onClick={handleDelete(i)}
                  type='button'
                >
                  <Icon icon='material-symbols:delete-forever' fontSize='1.5rem' />
                </button>
              </div>
              <input 
                id={`size-${i}`}
                type="number"
                name="size"
                min={0}
                step='0.1'
                value={size.values[i]}
                onChange={e => setSize(prev => {
                  const values = prev.values;
                  values[i] = Number(e.target.value);
                  return { ...prev, values };
                })}
              />
            </div>
          ))
        }
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