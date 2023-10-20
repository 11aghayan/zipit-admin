import { AxiosError } from 'axios';

import axios from '@/libs/axios';
import { ItemType, ResponseType } from '@/types';

export default async function editItem(body: Omit<ItemType, 'id'>, id: string) {
  try {
    const res = await axios.put(`/items/${id}`, body);
    return res.data as ResponseType;
  } catch (error) {
    const axiosError = error as AxiosError;
    const responseData = axiosError.response?.data as ResponseType;
    return responseData;
  }
}