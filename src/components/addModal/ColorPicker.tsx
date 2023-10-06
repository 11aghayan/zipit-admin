import cn from "@/utils/cn";
import isTooDark from "@/utils/isTooDark";
import { useState } from "react";

const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState<string>('#000');
  const [colorList, setColorList] = useState<string[]>([]);

  const handleAddClick = () => {
    setColorList(prev => {
      if (!prev.includes(currentColor)) {
        return [...prev, currentColor];
      } else {
        return prev;
      }
    }
    );
  };

  const handleDeleteClick = (color: string) => {
    setColorList(prev => {
      return prev.filter(val => val !== color);
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
      <div className="flex gap-2 items-center">
        {
          colorList.map(color => (
            <div 
              key={color}
              className="w-7 aspect-square rounded-full group relative"
              style={{
                backgroundColor: color
              }}
            >
              <button 
                type="button"
                className={cn("hidden group-hover:block absolute z-10 text-x rounded-full text-gray-400 bg-gray-200/30 inset-0", 
                  isTooDark(color) ? 'text-white' : 'text-gray-900'
                )}
                onClick={() => handleDeleteClick(color)}
              >
                X
              </button>
            </div>
          ))
        }
      </div>
      <div className="flex items-center gap-3">
        <input 
          type="color" 
          id="colors"
          name="colors"
          onChange={e => setCurrentColor(e.currentTarget.value)}
        />
        <button
          type="button"
          className="bg-gray-400 text-sm font-medium text-white rounded-xl px-2 hover:opacity-90"
          onClick={handleAddClick}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ColorPicker;