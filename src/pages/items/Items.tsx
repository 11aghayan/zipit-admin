import { useState } from "react";

import AddButton from "@/components/AddButton";
import { ItemResponseType } from "@/types";

import ItemsList from "./components/ItemsList";
import FilterButton from "./components/filter/FilterButton";
import FiltersModal from "./components/filter/FiltersModal";
import PagesList from "./components/pagination/PagesList";

const Items = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [items, setItems] = useState<ItemResponseType | null>(null);

  return (
    <main className="relative">
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
          <ItemsList 
            items={items}
            setItems={setItems}
          />
        </section>
        <PagesList 
          pages={items?.pages || 0}
        />
    </main>
  );
};

export default Items;