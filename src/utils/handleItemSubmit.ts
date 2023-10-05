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
        queryRef.current.categories.splice(index, 1);
      } else if (val.checked) {
        queryRef.current = {
          ...prev,
          categories: [...prev.categories, val.name]
        };
      }
    } else if (val.type === 'text' || val.type === 'number' || val.tagName === 'TEXTAREA') {
      queryRef.current = {
        ...prev,
        [val.name]: val.value
      };
    }
  }

  const query = queryRef.current;

  if (query.categories.length < 1) {
    console.log('At least 1 category must be provided');
    return;
  } 
  
  console.log(query);
};

export default handleItemSubmit;