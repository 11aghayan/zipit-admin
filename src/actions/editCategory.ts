import { AxiosError } from 'axios';

import axios from '@/libs/axios';
import { LanguageStringType, ResponseType } from "@/types";

export default async function editCategory(body: LanguageStringType, id: string) {
  try {
    const res = await axios.put(`/categories/${id}`, body);
    return res.data as ResponseType;
  } catch (error) {
    const axiosError = error as AxiosError;
    const responseData = axiosError.response?.data as ResponseType;
    return responseData; 
  }
}