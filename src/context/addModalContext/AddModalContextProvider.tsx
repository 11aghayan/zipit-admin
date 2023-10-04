import { ModalContextType, ModalVariantType } from "@/types";
import { createContext, useState } from "react";

export const ModalContext = createContext<ModalContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

const AddModalContextProvider = ({ children }: Props) => {
  const [props, setProps] = useState({
    isOpen: false,
  });
  const [variant, setVariant] = useState<ModalVariantType>(null);

  const toggleOpen = () => {
    setProps(prev => ({ ...prev, isOpen: !prev.isOpen }));
  };

  const value: ModalContextType = {
    isOpen: props.isOpen,
    toggleOpen,
    variant,
    setVariant
  };

  return (
    <ModalContext.Provider value={value}>
      { children }
    </ModalContext.Provider>
  );
};

export default AddModalContextProvider;