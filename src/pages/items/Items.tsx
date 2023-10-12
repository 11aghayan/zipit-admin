import AddButton from "@/components/AddButton";
import ItemsList from "./components/ItemsList";
import FilterButton from "./components/filter/FilterButton";
import FiltersModal from "./components/filter/FiltersModal";
import { useState } from "react";

const Items = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <main>
      <section className="relative flex w-full items-center justify-between gap-2">
        <FiltersModal 
          isOpen={isFilterOpen}
          setIsOpen={setIsFilterOpen}
        />
        <AddButton 
          label="Add Item"
          variant="item"
        />
        <FilterButton
          setIsOpen={setIsFilterOpen}
        />
      </section>
      <section className="pt-5">
        <ItemsList />
      </section>
    </main>
  );
};

export default Items;