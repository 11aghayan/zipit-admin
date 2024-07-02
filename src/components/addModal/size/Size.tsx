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

  const handleAvailable = (i: number) => {
    return (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSize(prev => {
        const available = e.target.value === 'true' ? true : false;
        const values = prev.values;
        values[i].available = available;
        return { ...prev, values };
      });
    };
  };

  return (
    <div className="flex gap-2 justify-between">
      <div className="grid sm:grid-cols-1 gap-1">
        {
          size.values.map((_val, i) => (
            <div className="w-full" key={i}>
              <div className='flex justify-between'>
                <label htmlFor={`size-${i}`}>
                  Size
                </label>
                {
                  size.values.length > 1
                  ?
                  <button 
                    className='text-red-600 hover:opacity-70'
                    onClick={handleDelete(i)}
                    type='button'
                  >
                    <Icon icon='material-symbols:delete-forever' fontSize='1.5rem' />
                  </button>
                  :null
                }
              </div>
              <div className='flex items-center justify-between gap-2'>
                <input 
                  id={`size-${i}`}
                  type="number"
                  name="size"
                  min={0}
                  step='0.1'
                  value={size.values[i].value}
                  onChange={e => setSize(prev => {
                    const values = prev.values;
                    values[i].value = Number(e.target.value);
                    return { ...prev, values };
                  })}
                />
                <select 
                  name="availability" 
                  id="availability"
                  onChange={handleAvailable(i)}
                  value={size.values[i].available ? 'true' : 'false'}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
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