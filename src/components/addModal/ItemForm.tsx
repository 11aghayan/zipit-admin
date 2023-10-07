import { useState } from "react";
import { ColorType, LanguageStringType, MinOrderType, PromoType } from "@/types";

import AddModalForm from "./AddModalForm";
import CategorySelector from "./CategorySelector";
import ColorPicker from "./ColorPicker";
import Name from "./Name";
import Description from "./Description";
import MinOrder from "./MinOrder";
import Promo from "./Promo";

const ItemForm = () => {
  const categories: string[] = ['shoes', 't-shirts', 'pants'];
  
  const [category, setCategory] = useState(categories[0]);
  const [name, setName] = useState<LanguageStringType>({am: '', ru: ''});
  const [price, setPrice] = useState(0);
  const [promo, setPromo] = useState<PromoType>(null);
  const [size, setSize] = useState<number>(0);
  const [minOrder, setMinOrder] = useState<MinOrderType>({qty: 0, unit: 'pcs'});
  const [colors, setColors] = useState<ColorType[]>([]);
  const [description, setDescription] = useState<LanguageStringType>({am: '', ru: ''});

  const [errorMessage, setErrorMessage] = useState<string>('');
  
  const onSubmit = () => {
    if (!category) return setErrorMessage('Category not provided');
    if (!name.am) return setErrorMessage('Name(AM) not provided');
    if (!name.ru) return setErrorMessage('Name(RU) not provided');
    if (!price) return setErrorMessage('Price must be number bigger than 0');
    if (promo !== null && promo < 0) return setErrorMessage('Promo cannot be a negative number');
    if (size === undefined) return setErrorMessage('Size not provided');
    if (minOrder.qty < 1) return setErrorMessage('Min order must be number bigger than 0');
    if (!colors.length) return setErrorMessage('Pick at least one color');

    setErrorMessage('');
    
    const body = JSON.stringify({
      category,
      name, 
      price,
      promo,
      size,
      colors,
      description,
      minOrder
    });

    console.log(body);
  };

  return (
    <AddModalForm
      submit={onSubmit}
    >
      <CategorySelector 
        categories={categories}
        category={category}
        setCategory={setCategory}
      />
      <Name 
        name={name}
        setName={setName}
      />
      <div>
        <label htmlFor="price">
          Price
        </label>
        <input 
          id="price"
          type="number"
          name="price"
          min={0}
          defaultValue={price}
          onChange={e => setPrice(Number(e.currentTarget.value))}
        />
      </div>
      <Promo 
        promo={promo}
        setPromo={setPromo}
      />
      <div>
        <label htmlFor="size">
          Size
        </label>
        <input 
          id="size"
          type="number"
          name="size"
          min={0}
          defaultValue={size}
          onChange={e => setSize(Number(e.target.value))}
        />
      </div>
      <MinOrder 
        minOrder={minOrder}
        setMinOrder={setMinOrder}
      />
      <ColorPicker 
        colors={colors}
        setColors={setColors}
      />
      <Description 
        description={description}
        setDescription={setDescription}
      />
      <p
        className="text-red-600 text-lg font-medium text-center"
      >{errorMessage && errorMessage}</p>
    </AddModalForm>
  );
};

export default ItemForm;