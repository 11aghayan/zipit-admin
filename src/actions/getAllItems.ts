import axios from '@/libs/axios';
import { ItemResponseType } from '@/types';

export default async function getAllItems() {
  const { href } = window.location;
  const sp = href.split('?')[1] ? `?${href.split('?')[1]}` : '';  
  
  try {
    const res = await axios.get(`/admin/items${sp}`);
    const data = res.data as ItemResponseType;
    return data;
  } catch(err) {
    console.log(err);
    return {items: [], length: 0};
  }
}