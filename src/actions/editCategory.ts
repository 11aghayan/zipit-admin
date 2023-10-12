import axios from '@/libs/axios';

import { LanguageStringType } from "@/types";

export default async function editCategory(body: LanguageStringType, id: string) {
  try {
    await axios.put(`/categories/${id}`, body);
    return { ok: true };
  } catch (error) {
    console.log(error);
    return { ok: false }; 
  }
}