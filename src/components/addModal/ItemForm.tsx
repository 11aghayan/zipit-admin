import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import getAllCategories from "@/actions/getAllCategories";
import useAddModalContext from "@/hooks/useAddModalContext";
import addItem from "@/actions/addItem";

import { CategoryType, ItemType, LanguageStringType, MinOrderType, AddModalContextType, PromoType, SizeType, PhotoType } from "@/types";

import AddModalForm from "./AddModalForm";
import CategorySelector from "./CategorySelector";
import Name from "./Name";
import Description from "./Description";
import MinOrder from "./MinOrder";
import Promo from "./Promo";
import Size from "./Size";
import editItem from "@/actions/editItem";
import Photos from "./photos/Photos";

const ItemForm = () => {
  const navigate = useNavigate();

  const { data, request } = useAddModalContext() as AddModalContextType;
  const currentData = data as ItemType;

  const [isLoading, setIsLoading] = useState(false);
  
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const [category, setCategory] = useState<CategoryType>(currentData?.category || categories[0]);
  const [name, setName] = useState<LanguageStringType>(currentData?.name || {am: '', ru: ''});
  const [price, setPrice] = useState(currentData?.price || 0);
  const [promo, setPromo] = useState<PromoType>(currentData?.promo || null);
  const [size, setSize] = useState<SizeType>(currentData?.size || {val: 0, unit: 'cm'});
  const [minOrder, setMinOrder] = useState<MinOrderType>(currentData?.minOrder || {qty: 0, unit: 'pcs'});
  const [photos, setPhotos] = useState<PhotoType[]>(currentData?.photos || []);
  const [description, setDescription] = useState<LanguageStringType>(currentData?.description || {am: '', ru: ''});
  
  const [errorMessage, setErrorMessage] = useState<string>('');
  
  useEffect(() => {
    getAllCategories()
      .then(data => {
        setCategories(data);
        if (!category) setCategory(data[0]);
      });
  }, [categories.length, category]);
  
  const onSubmit = () => {
    setIsLoading(true);
    
    if (!category) return setErrorMessage('Category not provided');
    if (!name.am) return setErrorMessage('Name(AM) not provided');
    if (!name.ru) return setErrorMessage('Name(RU) not provided');
    if (!price) return setErrorMessage('Price must be number bigger than 0');
    if (promo !== null && promo < 0) return setErrorMessage('Promo cannot be a negative number');
    if (size === undefined) return setErrorMessage('Size not provided');
    if (minOrder.qty < 1) return setErrorMessage('Min order must be number bigger than 0');
    if (!photos.length) return setErrorMessage('No Photos Provided');

    setErrorMessage('');
    
    const body: Omit<ItemType, 'id'> = {
      category,
      name, 
      price,
      promo,
      size,
      description,
      minOrder,
      photos
    };

    if (request === 'post') {
      addItem(body)
        .then(res => {
          if (res.ok) {
            navigate(0);
          } else {
            setErrorMessage('Something went wrong');
          }
        })
        .finally(() => setIsLoading(false));
    } else if (request === 'put') {
      editItem(body, data?.id as string)
        .then(res => {
          if (res.ok) {
            navigate(0);
          } else {
            setErrorMessage('Something went wrong');
          }
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
      setErrorMessage('Unknown request type');
      console.log('Unknown request type');
    }
  };

  return (
    <AddModalForm
      submit={onSubmit}
      isLoading={isLoading}
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
      <Photos 
        photos={photos}
        setPhotos={setPhotos}
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