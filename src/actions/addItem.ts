import axios from '@/libs/axios';
import { ItemType } from '@/types';

export default async function addItem(body: Omit<ItemType, 'id'>) {
  try {
    await axios.post('/items', body);
    return { ok: true };
  } catch (error) {
    console.log(error);
    return { ok: false };
  }
}