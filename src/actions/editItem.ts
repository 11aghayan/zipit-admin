import axios from '@/libs/axios';
import { ItemType } from '@/types';

export default async function editItem(body: Omit<ItemType, 'id'>, id: number) {
  try {
    await axios.put(`/items/${id}`, body);
    return { ok: true };
  } catch (error) {
    console.log(error);
    return { ok: false };
  }
}