import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import useRefreshToken from "@/hooks/useRefreshToken";
import useAuthContext from "@/hooks/useAuthContext";
import TextLoader from "./loader/TextLoader";

const PersistentLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { auth } = useAuthContext();
  const refresh = useRefreshToken();

  
  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    !auth?.loggedIn ? verifyRefreshToken() : setIsLoading(false);
  }, [refresh, auth.loggedIn]);

  return (
    <>
      {
        isLoading
        ?
        <div>
          <TextLoader 
            size={2}
          />
        </div>
        :
        <Outlet />
      }
    </>
  );
};

export default PersistentLogin;