import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Layout from "@/components/Layout";
import Categories from "@/pages/categories/Categories";
import Category from "@/pages/categories/Category";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="categories" element={<Categories />} />
    <Route path="categories/:category" element={<Category />} />
    <Route path="*" element={<NotFound />} />
  </Route>
));

export default router;