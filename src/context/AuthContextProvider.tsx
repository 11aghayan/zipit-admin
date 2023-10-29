import { AuthContextType, AuthType } from "@/types";
import { createContext, useState } from "react";

export const AuthContext = createContext<AuthContextType | null>(null);

type Props = {
  children: React.ReactNode;
}

export default function AuthContextProvider ({ children }: Props) {
  const [auth, setAuth] = useState<AuthType>({ accessToken: '', loggedIn: false });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}