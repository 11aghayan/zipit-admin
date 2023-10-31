import useAuthContext from "@/hooks/useAuthContext";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { auth } = useAuthContext();
  const location = useLocation();
  
  return(
    auth.loggedIn 
    ?
    <Outlet />
    :
    <Navigate to='/login' state={{ from: location }} replace />
  );
};

export default ProtectedRoutes;