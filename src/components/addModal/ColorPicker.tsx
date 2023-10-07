import cn from "@/utils/cn";
import isTooDark from "@/utils/isTooDark";
import { useState } from "react";

import { ColorType } from "@/types";

import Quantity from "./Quantity";

type Props = {
  colors: ColorType[];
  setColors: React.Dispatch<React.SetStateAction<ColorType[]>>;
};

const ColorPicker = ({ colors, setColors }: Props) => {
  const [currentColor, setCurrentColor] = useState<ColorType>({
    color: '#000',
    qty: 0 
  });

  const addQty = (color: string, qty: number) => {
    setColors(prev => {
      const newArray = prev.map(c => {
        if (c.color === color) {
          return {
            ...c,
            qty
          };
        }
        return c;
      });
      return newArray;
    });
  };
  
  const handleAddColorClick = () => {
    setColors(prev => {
        if (!prev.find(e => e.color === currentColor.color)) {
          return [...prev, currentColor];
        } else {
          return prev;
        }
      }
    );
  };

  const handleDeleteColorClick = (color: string) => {
    setColors(prev => {
      return prev.filter(val => val.color !== color);
    });
  };
  
  return (
    <div className="flex flex-col gap-2">
      <label 
        htmlFor="colors"
        className="w-fit"
      >
        Colors
      </label>
      <div className="space-y-2">
        {
          colors.map(({ color }) => (
            <div  
              key={color}
              className="flex gap-2 items-end"
            >
              <div 
                className="w-9 h-9 rounded-full group relative"
                style={{
                  backgroundColor: color
                }}
              >
                <button 
                  type="button"
                  className={cn("hidden group-hover:block absolute z-10 text-x rounded-full text-gray-400 bg-gray-200/30 inset-0", 
                    isTooDark(color) ? 'text-white' : 'text-gray-900'
                  )}
                  onClick={() => handleDeleteColorClick(color)}
                >
                  X
                </button>
              </div>
              <Quantity
                addQty={addQty}
                color={color}
              />
            </div>
          ))
        }
      </div>
      <div className="flex items-center gap-3">
        <div className="relative w-12 h-7 rounded-full overflow-hidden">
          <input 
            type="color" 
            id="colors"
            name="colors"
            onChange={e => setCurrentColor({ color: e.currentTarget.value, qty: 0 })}
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-20 h-20"
          />
        </div>
        <button
          type="button"
          className="bg-sky-800 text-white text-md font-medium rounded-full px-2 pb-[1px] hover:opacity-90"
          onClick={handleAddColorClick}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ColorPicker;