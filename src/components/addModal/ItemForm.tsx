import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import getAllCategories from "@/actions/getAllCategories";
import useAddModalContext from "@/hooks/useAddModalContext";
import addItem from "@/actions/addItem";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";

import { CategoryType, ItemType, LanguageStringType, MinOrderType, AddModalContextType, PromoType, SizeType, PhotoType, ItemCategoryType } from "@/types";

import AddModalForm from "./AddModalForm";
import CategorySelector from "./CategorySelector";
import Name from "./Name";
import Description from "./Description";
import MinOrder from "./MinOrder";
import Promo from "./Promo";
import Size from "./size/Size";
import editItem from "@/actions/editItem";
import Photos from "./photos/Photos";
import AddSize from "./size/AddSize";

const ItemForm = () => {
  const navigate = useNavigate();
  const axios = useAxiosPrivate();

  const { data, request } = useAddModalContext() as AddModalContextType;
  const currentData = data as ItemType;

  const [isLoading, setIsLoading] = useState(false);
  
  const [categories, setCategories] = useState<CategoryType[] | null>(null);

  const [category, setCategory] = useState<ItemCategoryType>(currentData?.category || (categories ? { id: categories[0].id, name: categories[0].label } : null));
  const [name, setName] = useState<LanguageStringType>(currentData?.name || { am: '', ru: '' });
  const [price, setPrice] = useState(currentData?.price || 0);
  const [promo, setPromo] = useState<PromoType>(currentData?.promo || null);
  const [size, setSize] = useState<SizeType>(currentData?.size || { values: [{ value: 0, colors: [] }], unit: 'cm'} );
  const [minOrder, setMinOrder] = useState<MinOrderType>(currentData?.minOrder || {qty: 0, unit: 'pcs'});
  const [photos, setPhotos] = useState<PhotoType[]>(currentData?.photos || []);
  const [description, setDescription] = useState<LanguageStringType>(currentData?.description || { am: '', ru: '' });

  const [errorMessage, setErrorMessage] = useState<string>('');

  const setErrorAndLoading = (error: string, loading: boolean = false) => {
    setErrorMessage(error);
    setIsLoading(loading);
  };
  
  useEffect(() => {
    getAllCategories(axios)
      .then(data => {
        setCategories(data);
        if (!category) setCategory({ id: data[0].id, name: data[0].label });
      });
  }, [categories?.length, category, axios]);
  
  const onSubmit = () => {
    setErrorAndLoading('', true);
    
    if (!category) return setErrorAndLoading('Category not provided');
    if (!name.am) return setErrorAndLoading('Name(AM) not provided');
    if (!name.ru) return setErrorAndLoading('Name(RU) not provided');
    if (!price) return setErrorAndLoading('Price must be number bigger than 0');
    if (promo !== null && promo < 0) return setErrorAndLoading('Promo cannot be a negative number');
    if (size === undefined) return setErrorAndLoading('Size not provided');
    if (minOrder.qty < 1) return setErrorAndLoading('Min order must be number bigger than 0');
    if (!photos.length) return setErrorAndLoading('No Photos Provided');
    
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
      addItem(body, axios)
        .then(res => {
          if (res.ok) {
            navigate(0);
          } else {
            setErrorMessage(res.message);
          }
        })
        .finally(() => setIsLoading(false));
    } else if (request === 'put') {
      editItem(body, data?.id as string, axios)
        .then(res => {
          if (res.ok) {
            navigate(0);
          } else {
            setErrorMessage(res.message);
          }
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
      setErrorMessage('Unknown request type');
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
        colors={photos.map(p => `${p.color.am}&dash&${p.color.ru}`)}
      />
      <AddSize setSize={setSize} />
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
      >
        {errorMessage ? errorMessage : null}
      </p>
    </AddModalForm>
  );
};

export default ItemForm;