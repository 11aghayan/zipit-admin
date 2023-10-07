import { PromoType } from "@/types";
import { useEffect, useState } from "react";

type Props = {
  promo: PromoType;
  setPromo: React.Dispatch<React.SetStateAction<PromoType>>
};

const Promo = ({ promo, setPromo }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setPromo(isChecked ? 0 : null);
  }, [isChecked, setPromo]);

  return (
    <>
      <div className="flex items-center gap-2">
        <label htmlFor="promoCheck" className="pb-1">
          <p>Promo</p>
        </label>
        <input 
            type="checkbox" 
            name="promoCheck" 
            id="promoCheck" 
            className="w-4 h-4"
            onChange={e => setIsChecked(e.target.checked)}
          />
      </div> 
      {
        isChecked &&
        <div>
          <label htmlFor="promoPrice" className="pb-1">
            <p>Promo Price</p>
          </label>
          <input 
              type="number" 
              name="promoPrice" 
              id="promoPrice"
              min={0}
              defaultValue={promo || 0}
              onChange={e => setPromo(Number(e.target.value))}
            />
        </div>
      }
    </>
  );
};

export default Promo;