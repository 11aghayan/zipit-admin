import { useContext } from "react";
import { ModalContext } from "@/context/AddModalContextProvider";
import { ModalContextType } from "@/types";

const useAddModalContext = () => {
  return useContext(ModalContext) as ModalContextType;
};

export default useAddModalContext;