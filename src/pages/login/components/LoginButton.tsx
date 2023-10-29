import Loader from "@/components/loader/Loader";

type Props = {
  isLoading: boolean;
}

const LoginButton = ({ isLoading }: Props) => {

  return (
    <button className="
        w-full
        items-center
        justify-center
        flex
        min-h-[44px]
        bg-emerald-500
        p-2 
        rounded-md
        mt-2
        text-white
        text-lg
        shadow-sm
        hover:opacity-95
        active:opacity-100
        disabled:bg-gray-500
        disabled:opacity-100
      "
      disabled={isLoading}
    >
      {
        isLoading 
        ?
        <Loader 
          size={2}
          isDark
        />
        :
        <span>Login</span>
      }
    </button>
  );
};

export default LoginButton;