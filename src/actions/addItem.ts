import { AxiosError } from 'axios';

import axios from '@/libs/axios';
import { ItemType, ResponseType } from '@/types';

export default async function addItem(body: Omit<ItemType, 'id'>) {
  try {
    const res = await axios.post('/items', body);
    return res.data as ResponseType;
  } catch (error) {
    const axiosError = error as AxiosError;
    const responseData = axiosError.response?.data as ResponseType;
    return responseData;
  }
}