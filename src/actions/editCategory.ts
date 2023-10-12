import axios from '@/libs/axios';

import { CategoryType } from "@/types";

export default async function editCategory(body: Omit<CategoryType, 'id'>, id: string) {
  try {
    await axios.put(`/categories/${id}`, body);
    return { ok: true };
  } catch (error) {
    console.log(error);
    return { ok: false }; 
  }
}