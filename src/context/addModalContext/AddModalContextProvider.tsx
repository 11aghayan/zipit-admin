import { ModalContextType, ModalDataType, ModalVariantType, RequestType } from "@/types";
import { createContext, useState } from "react";

export const ModalContext = createContext<ModalContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

const AddModalContextProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [variant, setVariant] = useState<ModalVariantType>(null);
  const [currentData, setCurrentData] = useState<ModalDataType>(null);
  const [currentRequest, setCurrentRequest] = useState<RequestType>('post');

  const toggleOpen = () => {
    setIsOpen(prev => !prev);
  };

  const setData = (data: ModalDataType) => {
    setCurrentData(data);
  };

  const setRequest = (request: RequestType) => {
    setCurrentRequest(request);
  };

  const value: ModalContextType = {
    isOpen,
    toggleOpen,
    variant,
    setVariant,
    data: currentData,
    setData: setData,
    request: currentRequest,
    setRequest
  };

  return (
    <ModalContext.Provider value={value}>
      { children }
    </ModalContext.Provider>
  );
};

export default AddModalContextProvider;