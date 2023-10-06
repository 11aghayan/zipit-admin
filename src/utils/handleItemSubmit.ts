import { ItemFormType } from "@/types";

const handleItemSubmit = (e: React.FormEvent<HTMLFormElement>, queryRef: React.MutableRefObject<ItemFormType>) => {
  e.preventDefault();
  const inputs = Array.from(e.currentTarget);
  
  for (const key in inputs) {
    const val = inputs[key] as HTMLInputElement;
    const prev = queryRef.current;

    if (val.type === 'checkbox') {
      if (prev.categories.includes(val.name) && val.checked) {
        continue;
      } else if (prev.categories.includes(val.name) && !val.checked){
        const index = prev.categories.indexOf(val.name);
        queryRef?.current.categories.splice(index, 1);
      } else if (val.checked) {
        queryRef.current = {
          ...prev,
          categories: [...prev.categories, val.name]
        }; 
      }
    } else if (val.type === 'text' || val.type === 'number' || val.tagName === 'TEXTAREA') {
      const value = isNaN(Number(val.value)) ? val.value : Number(val.value);
      console.log(val.name + ' ' + typeof value);
      queryRef.current = {
        ...prev,
        [val.name]: value
      };
    }
  }

  const query = queryRef.current;
  
  console.log(query);
};

export default handleItemSubmit;