import LoaderDot from "./LoaderDot";

type Props = {
  size: number;
  isDark?: boolean;
}

const Loader = ({ size, isDark }: Props) => {
  const delayBase = 50;

  return (
    <div className="w-fit flex gap-1">
      <LoaderDot 
        size={size}
        delay={delayBase * 2}
        isDark={isDark || false}
      />
      <LoaderDot 
        size={size}
        delay={delayBase * 4}
        isDark={isDark || false}
      />
      <LoaderDot 
        size={size}
        delay={delayBase * 6}
        isDark={isDark || false}
      />
    </div>
  );
};

export default Loader;