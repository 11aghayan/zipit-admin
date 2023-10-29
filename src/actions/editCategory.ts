import { AxiosError, AxiosInstance } from 'axios';

import { LanguageStringType, ResponseType } from "@/types";

export default async function editCategory(body: LanguageStringType, id: string, axios: AxiosInstance) {
  try {
    const res = await axios.put(`/categories/${id}`, body);
    return res.data as ResponseType;
  } catch (error) {
    const axiosError = error as AxiosError;
    const responseData = axiosError.response?.data as ResponseType;
    return responseData; 
  }
}