import { useContext } from "react";
import { ModalContext } from "@/context/AddModalContextProvider";
import { AddModalContextType } from "@/types";

const useAddModalContext = () => {
  return useContext(ModalContext) as AddModalContextType;
};

export default useAddModalContext;