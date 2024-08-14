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
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setSize(prev => {
        const checked = e.target.checked;
        console.log(checked);
        const color = e.target.value;
        const values = size.values;
        const colors = values[sizeIndex].colors;
        if (checked) {
          if (!colors.includes(color)) {
            values[sizeIndex].colors.push(color);
          }
        } else {
          values[sizeIndex].colors = colors.filter(c => c !== color);
        }
        console.log(values[sizeIndex].colors);
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
                <div 
                  className='border space-y-1 border-gray-500 p-2 rounded-md bg-white'
                  defaultValue={sizeValue.colors}
                >
                  {
                    colors.map((color) => (
                      <div key={`${color}-${sizeIndex}`} className='flex items-center gap-2 border border-gray-400 p-1'>
                        <label htmlFor={`${color}-${sizeIndex}`} className='text-gray-700'>
                          {color.split('&dash&')[0]}
                        </label>
                        <input
                          type='checkbox'
                          defaultChecked={!!(size.values.find(value => value.colors.includes(color)))}
                          id={`${color}-${sizeIndex}`}
                          onChange={handleColorPick(sizeIndex)}
                          value={color}
                        />
                      </div>
                    ))
                  }
                </div>
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