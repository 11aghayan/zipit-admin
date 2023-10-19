import Loader from "./Loader";

type Props = {
  size: number;
  isDark?: boolean;
}

const TextLoader = ({ size, isDark }: Props) => {

  return (
    <div className="w-full flex items-end gap-2 animate-pulse justify-center">
      <div 
        className="text-gray-900 text-xl"
      >
        Loading
      </div>
      <div className="pb-1">
        <Loader 
          size={size}
          isDark={isDark || false}
        />
      </div>
    </div>
  );
};

export default TextLoader;