import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  
  return (
    <main className="flex flex-col items-center gap-4">
      <h2 className="mt-20 text-center text-3xl sm:text-4xl text-gray-900 font-semibold">
        404 Page NotFound
      </h2>
      <button
        onClick={() => navigate(-1)}
        className="
          text-center 
          text-xl 
          sm:text-2xl 
          font-medium
          text-gray-900 
          bg-gray-300 
          p-2 
          rounded-xl
          w-full
          max-w-[300px]
          shadow-sm
          hover:opacity-80
        "
      >
        Go Back
      </button>
    </main>
  );
};

export default NotFound;