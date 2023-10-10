import AddButton from "@/components/AddButton";
import ItemsList from "./components/ItemsList";

const Items = () => {

  return (
    <main>
      <section className="flex flex-col w-fit gap-2">
        <AddButton 
          label="Add Item"
          variant="item"
        />
      </section>
      <section className="pt-5">
        <ItemsList />
      </section>
    </main>
  );
};

export default Items;