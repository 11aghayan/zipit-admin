import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Categories from "@/pages/categories/Categories";
import Category from "@/pages/categories/Category";
import Items from "@/pages/items/Items";
import Item from "@/pages/items/Item";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="categories" element={<Categories />} />
    <Route path="categories/:category" element={<Category />} />
    <Route path="items" element={<Items />} />
    <Route path="items/:itemId" element={<Item />} />
    <Route path="*" element={<NotFound />} />
  </Route>
));

export default router;