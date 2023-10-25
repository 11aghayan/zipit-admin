export type ModalVariantType = 'category' | 'item' | null;

export type ModalDataType = ItemType | CategoryType | null;

export type RequestType = 'post' | 'put';

export type AddModalContextType = {
  isOpen: boolean;
  toggleOpen: () => void; 
  variant: ModalVariantType;
  setVariant: React.Dispatch<React.SetStateAction<ModalVariantType>>;
  data: ModalDataType;
  setData: (data: ModalDataType) => void;
  request: RequestType;
  setRequest: (request: RequestType) => void;
};

export type CategoryType = {
  id: string;
  label: LanguageStringType;
  itemsQty: number
};

export type ItemCategoryType = {
  id: string;
  name: LanguageStringType;
}

export type ItemType = {
  id: string;
  category: ItemCategoryType;
  name: LanguageStringType;
  price: number;
  promo: PromoType;
  size: SizeType;
  minOrder: MinOrderType;
  photos: PhotoType[];
  description: LanguageStringType;
};

export type PhotoType = {
  src: string;
  qty: number;
  color: LanguageStringType;
};

export type ItemResponseType = {
  items: ItemType[];
  length: number;
  pages: number;
}

export type LanguageStringType = {
  am: string;
  ru: string;
};

export type MinOrderType = {
  qty: number;
  unit: MinOrderUnitType;
};

export type MinOrderUnitType = 'pcs' | 'cm' | 'box' | 'roll';

export type SizeType = {
  val: number;
  unit: SizeUnitType;
};

export type SizeUnitType = 'mm' | 'cm' | 'm';

export type PromoType = number | null;

export type ResponseType = {
  ok: true
} | {
  ok: false;
  message: string;
};