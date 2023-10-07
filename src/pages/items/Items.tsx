import AddButton from "@/components/AddButton";

const Items = () => {
  

  return (
    <main>
      <div className="flex flex-col w-fit gap-2">
        <AddButton 
          label="Add Item"
          variant="item"
        />
      </div>
    </main>
  );
};

export default Items;