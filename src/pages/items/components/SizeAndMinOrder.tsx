import { MinOrderType, SizeType } from "@/types";

type Props = {
  size: SizeType;
  minOrder: MinOrderType;
};

const SizeAndMinOrder = ({ size, minOrder }: Props) => {
  return (
    <div className="border-b border-gray-900 pb-2">
      <p className="text-gray-900 text-lg text-center">Size: {size.val} {size.unit}</p>
      <p className="text-gray-900 text-lg text-center capitalize">Min Order: {minOrder.qty} {minOrder.unit}</p>
    </div>
  );
};

export default SizeAndMinOrder;