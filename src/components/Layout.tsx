import { Outlet } from "react-router-dom";

import Header from "@/components/Header";
import AddModal from "@/components/addModal/AddModal";

const Layout = () => {
  return (
    <div>
      <AddModal />
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;