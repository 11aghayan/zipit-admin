import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import ApiPage from "@/pages/apiPage/ApiPage";
import NotFound from "@/pages/NotFound";
import Categories from "@/pages/categories/Categories";
import Items from "@/pages/items/Items";
import Login from "@/pages/login/Login";
import Settings from "@/pages/settings/Settings";
import Layout from "@/components/Layout";
import ProtectedRoutes from "@/components/ProtectedRoutes";
import PersistentLogin from "@/components/PersistentLogin";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" >
    <Route element={<PersistentLogin />}>
      <Route element={<ProtectedRoutes />}>
        <Route element={<Layout />} >
          <Route index element={<ApiPage />} />
          <Route path="categories" element={<Categories />} />
          <Route path="items" element={<Items />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
      <Route path="login" element={<Login />} />
    </Route>
  </Route>
));

export default router;