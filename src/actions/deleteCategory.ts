import { AxiosError } from 'axios';

import axios from '@/libs/axios';
import { ResponseType } from '@/types';

export default async function deleteCategory(id: string) {
  try {
    const res = await axios.delete(`/categories/${id}`);
    return res.data as ResponseType;
  } catch (error) {
    const axiosError = error as AxiosError;
    const responseData = axiosError.response?.data as ResponseType;
    return responseData;
  }
}