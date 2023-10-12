import axios from '@/libs/axios';
import { ItemResponseType } from '@/types';

export default async function getAllItems() {
  try {
    const res = await axios.get('/admin/items');
    const data = res.data as ItemResponseType;
    return data;
  } catch(err) {
    console.log(err);
    return {items: [], length: 0};
  }
}