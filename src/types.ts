export type ModalVariantType = 'category' | 'item' | null;

export type ModalContextType = {
  isOpen: boolean;
  toggleOpen: () => void; 
  variant: ModalVariantType;
  setVariant: React.Dispatch<React.SetStateAction<ModalVariantType>>;
};

export type ItemFormType<T> = {
  categories: T;
  name: string;
  price: number;
  qty: number;
  description?: string;
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

export type PromoType = number | null;