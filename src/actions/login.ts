import axios from '@/libs/axios';
import { AxiosError } from 'axios';

type BodyType = {
  username: string;
  password: string;
}

export default async function login(body: BodyType) {
  try {
    const response = await axios.post('/auth/login', body, { headers: { 'Content-Type': 'application/json' }, withCredentials: true });
    return response.data;
  } catch (error) {
    console.log(error);  
    const axiosError = error as AxiosError;
    const customError = axiosError.response as { data: { ok: boolean, message: string }};
    return customError?.data || { ok: false, message: 'Server Error'};
  }
}