import cn from "@/utils/cn";

type Props = {
  size: number;
  delay: number;
  isDark: boolean;
}

const LoaderDot = ({ size, delay, isDark }: Props) => {
  

  return (
    <div 
      className={cn("rounded-full bg-gray-900 animate-bounce", isDark ? 'bg-gray-200' : '')} 
      style={{
        width: `${size * 4}px`,
        aspectRatio: '1',
        animationDelay: `${delay}ms`
      }}
    />
  );
};

export default LoaderDot;