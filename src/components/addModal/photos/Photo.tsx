import Quantity from "@/components/addModal/Quantity";
import ColorName from "../ColorName";

type Props = {
  src: string;
}

const EachPhoto = ({ src }: Props) => {

  return (
    <div
      key={src}
      className="flex items-center gap-2 p-2 border-b border-gray-900"
    >
      <img 
        src={src} 
        alt="Item Photo" 
        width={100}
        className="rounded-xl border-2 border-gray-900 aspect-square"
      />
      <div className="space-y-3">
        <ColorName />
        <Quantity />
      </div>
    </div>
  );
};

export default EachPhoto;