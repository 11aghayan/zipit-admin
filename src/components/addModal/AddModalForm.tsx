import AddModalButtons from "./AddModalButtons";

type Props = {
  children: React.ReactNode;
  submit: () => void;
  isLoading: boolean;
};

const AddModalForm = ({ children, submit, isLoading }: Props) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
  };

  return (
    <form 
      className="
        flex 
        flex-col 
        gap-4 
        p-3 
        bg-gray-100 
        rounded-md 
        shadow-lg  
        w-full 
        max-w-lg
        m-2
        h-fit
      "
      onSubmit={handleSubmit}
    >
        { children }
        <AddModalButtons 
          isLoading={isLoading}
        />
      </form>
  );
};

export default AddModalForm;