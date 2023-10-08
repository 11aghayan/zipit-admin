export type ModalVariantType = 'category' | 'item' | null;

export type ModalContextType = {
  isOpen: boolean;
  toggleOpen: () => void; 
  variant: ModalVariantType;
  setVariant: React.Dispatch<React.SetStateAction<ModalVariantType>>;
};

export type CategoryType = {
  id: number;
  label: string;
  items: ItemType[]
};

export type ItemType = {
  id: number;
  category: string;
  name: LanguageStringType;
  price: number;
  promo: PromoType;
  size: SizeType;
  minOrder: MinOrderType;
  colors: ColorType[];
  description: LanguageStringType;
};

export type ColorType = {
  color: string;
  qty: number;
};

export type LanguageStringType = {
  am: string;
  ru: string;
};

export type MinOrderType = {
  qty: number;
  unit: MinOrderUnitType;
};

export type MinOrderUnitType = 'pcs' | 'cm' | 'box';

export type SizeType = {
  val: number;
  unit: SizeUnitType;
};

export type SizeUnitType = 'mm' | 'cm' | 'm';

export type PromoType = number | null;