import Loader from "@/components/loader/Loader";

type Props = {
  isLoading: boolean;
}

const SubmitButton = ({ isLoading }: Props) => {

  return (
    <button
      className="
      mx-auto 
      mt-2 
      w-fit 
      bg-yellow-500 
      rounded-lg 
      shadow-sm
      px-3 
      py-2
      hover:brightness-105
      disabled:bg-gray-400
      disabled:brightness-100
      relative
    "
    disabled={isLoading}
    >
      {
        isLoading
        ?
        <>
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader size={2} isDark />
          </div>
          <span className="invisible text-xl text-white font-medium">Change Password</span>
        </>
        :
        <span className="text-xl text-white px-3 py-2font-medium">Change Password</span>
      }
    </button>
  );
};

export default SubmitButton;