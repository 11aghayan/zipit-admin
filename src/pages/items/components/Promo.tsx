import { PromoType } from "@/types";

type Props = {
  promo: PromoType;
  price: number;
};

const Promo = ({ promo, price }: Props) => {
  return (
    <p className="text-gray-900 text-lg text-center">
      {
        promo
        ?
        <>
          <span className="line-through">{price}</span>
          <span> / {promo} AMD</span>
        </>
        :
        <span>{price} AMD</span>
      }
    </p>
  );
};

export default Promo;