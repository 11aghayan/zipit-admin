import { Icon } from '@iconify/react';

import { SizeType, SizeUnitType } from "@/types";

type Props = {
  size: SizeType;
  setSize: React.Dispatch<React.SetStateAction<SizeType>>;
  colors: string[];
};

const Size = ({ size, setSize, colors }: Props) => {
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

  const handleColorPick = (sizeIndex: number) => {
    return (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSize(prev => {
        const selected = Array.from(e.target.selectedOptions).map(option => option.value);
        const values = size.values;
        values[sizeIndex].colors = selected;
        return {
          ...prev,
          values
        };
      })
    };
  };

  return (
    <div className="flex gap-2 justify-between">
      <div className="grid sm:grid-cols-1 gap-1">
        {
          size.values.map((sizeValue, sizeIndex) => (
            <div className="w-full" key={sizeIndex}>
              <div className='flex justify-between'>
                <label htmlFor={`size-${sizeIndex}`}>
                  Size
                </label>
                {
                  size.values.length > 1
                  ?
                  <button 
                    className='text-red-600 hover:opacity-70'
                    onClick={handleDelete(sizeIndex)}
                    type='button'
                  >
                    <Icon icon='material-symbols:delete-forever' fontSize='1.5rem' />
                  </button>
                  :null
                }
              </div>
              <div className='flex items-center justify-between gap-2'>
                <input 
                  id={`size-${sizeIndex}`}
                  type="number"
                  name="size"
                  min={0}
                  step='0.1'
                  value={size.values[sizeIndex].value}
                  onChange={e => setSize(prev => {
                    const values = prev.values;
                    values[sizeIndex].value = Number(e.target.value);
                    return { ...prev, values };
                  })}
                />
                <select 
                  multiple 
                  className='h-fit'
                  onChange={handleColorPick(sizeIndex)}
                  defaultValue={sizeValue.colors}
                >
                  {
                    colors.map((color) => (
                      <option
                        key={color}
                        className='h-fit'
                        value={color}
                      >
                        {color.split('&dash&')[0]}
                      </option>
                    ))
                  }
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