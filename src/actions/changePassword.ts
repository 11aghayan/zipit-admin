import { AxiosError, AxiosInstance } from "axios";

import { ChangePasswordType, CustomErrorType } from "@/types";

export default async function(body: ChangePasswordType, axios: AxiosInstance) {
  try {
    await axios.put('/auth', body, { headers: { 'Content-Type': 'application/json' }, withCredentials: true });
    return { ok: true };
  } catch (error) {
    console.log(error);
    const axiosError = error as AxiosError;
    const customError = axiosError.response as CustomErrorType;
    return customError?.data || { ok: false, message: 'Server Error' };
  }
}