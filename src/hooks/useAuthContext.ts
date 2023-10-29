import { useContext } from "react";

import { AuthContext } from "@/context/AuthContextProvider"; 
import { AuthContextType } from "@/types";

export default function() {
  return useContext(AuthContext) as AuthContextType;
}