import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Categories from "@/pages/categories/Categories";
import Items from "@/pages/items/Items";
import Login from "./pages/login/Login";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" >
    <Route element={<Layout />} >
      <Route index element={<Home />} />
      <Route path="categories" element={<Categories />} />
      <Route path="items" element={<Items />} />
      <Route path="*" element={<NotFound />} />
    </Route>
      <Route path="login" element={<Login />} />
  </Route>
));

export default router;