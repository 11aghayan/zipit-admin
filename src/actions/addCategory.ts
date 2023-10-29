import { AxiosError, AxiosInstance } from 'axios';

import { LanguageStringType, ResponseType } from '@/types';

export default async function(body: { label: LanguageStringType }, axios: AxiosInstance) {
  try {
    const res = await axios.post('/categories', body);
    return res.data as ResponseType;
  } catch (error) {
    const axiosError = error as AxiosError;
    const responseData = axiosError.response?.data as ResponseType;
    return responseData;
  }
}