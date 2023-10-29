import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useAuthContext from "@/hooks/useAuthContext";

import LoginForm from "./components/LoginForm";

const Login = () => {

  const { auth } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';
  
  useEffect(() => {
    if (auth.loggedIn) navigate(from, { replace: true });
  }, [auth.loggedIn, navigate, from]);
  
  return (
    <main className="absolute inset-0 flex items-center justify-center p-1">
      <h2 className="absolute top-3 left-1/2 -translate-x-1/2 text-6xl font-semibold text-gray-700">
        ZipIT
      </h2>
      <LoginForm 
        from={from}
      />
    </main>
  );
};

export default Login;