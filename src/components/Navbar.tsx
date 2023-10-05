import navRoutes from "@/libs/navRoutes";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="flex items-center gap-3 md:gap-5">
      {
        navRoutes.map(route => (
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