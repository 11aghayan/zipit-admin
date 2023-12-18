import navRoutes from "@/libs/navRoutes";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";


const Navbar = () => {

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const isMobile = windowSize < 1000;

  const navigate = useNavigate();

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      navigate('categories', { replace: true });
    }
  }, [isMobile, navigate]);

  const routes = !isMobile ? navRoutes : navRoutes.slice(1);
  
  return (
    <nav className="flex items-center gap-3 md:gap-5">
      {
        routes.map(route => (
          <NavLink 
            key={route.href}
            to={route.href}
            className={({ isActive }) => (
              `
                text-xl 
                font-medium
                px-2
                pt-1
                pb-[6px]
                rounded-md
                ${isActive ? 
                    'bg-sky-700 text-white' : 
                    'text-gray-900 hover:bg-gray-300'}
              `
            )}
          >
            {route.label}
          </NavLink>
        ))
      }
    </nav>
  );
};

export default Navbar;