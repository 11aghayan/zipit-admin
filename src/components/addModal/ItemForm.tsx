import { useEffect, useState } from "react";

import { CategoryType, ColorType, LanguageStringType, MinOrderType, PromoType, SizeType } from "@/types";
import axios from '@/libs/axios';

import AddModalForm from "./AddModalForm";
import CategorySelector from "./CategorySelector";
import ColorPicker from "./ColorPicker";
import Name from "./Name";
import Description from "./Description";
import MinOrder from "./MinOrder";
import Promo from "./Promo";
import Size from "./Size";

const ItemForm = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  
  const [category, setCategory] = useState(categories[0]?.label || '');
  const [name, setName] = useState<LanguageStringType>({am: '', ru: ''});
  const [price, setPrice] = useState(0);
  const [promo, setPromo] = useState<PromoType>(null);
  const [size, setSize] = useState<SizeType>({val: 0, unit: 'cm'});
  const [minOrder, setMinOrder] = useState<MinOrderType>({qty: 0, unit: 'pcs'});
  const [colors, setColors] = useState<ColorType[]>([]);
  const [description, setDescription] = useState<LanguageStringType>({am: '', ru: ''});

  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    axios.get('/categories')
      .then(data => setCategories(data.data))
      .catch(console.log);
  }, [categories]);
  
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
      <Size 
        size={size}
        setSize={setSize}
      />
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