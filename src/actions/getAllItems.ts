import { ItemResponseType } from '@/types';
import { AxiosInstance } from 'axios';

export default async function getAllItems(axios: AxiosInstance) {
  const { href } = window.location;
  const sp = href.split('?')[1] ? `?${href.split('?')[1]}` : '';  
  
  try {
    const res = await axios.get(`/items/admin${sp}`);
    const data = res.data as ItemResponseType;
    return data;
  } catch(err) {
    console.log(err);
    return { items: [], length: 0, pages: 0 };
  }
}