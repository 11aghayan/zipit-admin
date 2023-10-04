export type ModalVariantType = 'category' | 'item' | 'spreadsheet' | null;

export type ModalContextType = {
  isOpen: boolean;
  toggleOpen: () => void; 
  variant: ModalVariantType;
  setVariant: React.Dispatch<React.SetStateAction<ModalVariantType>>;
};