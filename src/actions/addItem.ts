import { AxiosError, AxiosInstance } from 'axios';

import { ItemType, ResponseType } from '@/types';

export default async function addItem(body: Omit<ItemType, 'id'>, axios: AxiosInstance) {
  
  try {
    const res = await axios.post('/items', body);
    return res.data as ResponseType;
  } catch (error) {
    const axiosError = error as AxiosError;
    const responseData = axiosError.response?.data as ResponseType;
    return responseData;
  }
}