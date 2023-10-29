import { AxiosInstance } from "axios";

export default async function getAllCategories(axios: AxiosInstance) {
  try {
    const { data } = await axios.get('/categories/admin');
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}