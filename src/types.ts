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