import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import logout from "@/actions/logout";

import Loader from "./loader/Loader";
import useAuthContext from "@/hooks/useAuthContext";

const SignOutBtn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();
  const { setAuth } = useAuthContext();
  
  const handleSignOut = async () => {
    setIsLoading(true);
    setErrMsg('');
    
    logout()
    .then(res => {
      if (res.ok) {
          console.log(res);
          setAuth({ loggedIn: false, accessToken: '' });
          navigate('/login', { replace: true });        
        } else {
          setErrMsg('Something went wrong. Server side error occurred');
          toast.error(errMsg);
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <button 
      className="
        bg-red-500
        rounded-full 
        px-3 
        pt-1
        pb-[6px]
        text-gray-200
        text-lg
        font-medium
        hover:brightness-110
        disabled:brightness-100
        disabled:bg-gray-400
        relative
      "
      onClick={handleSignOut}
      disabled={isLoading}
    >
      {
        isLoading
        ?
        <>
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader 
              size={2} 
              isDark
            />
          </div>
          <span className="invisible">Sign Out</span>
        </>
        :
        <span>Sign Out</span>
      }
    </button>
  );
};

export default SignOutBtn;