import { Outlet } from "react-router-dom";

import Header from "@/components/Header";
import AddModal from "@/components/addModal/AddModal";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  
  return (
    <div>
      <Toaster />
      <AddModal />
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;