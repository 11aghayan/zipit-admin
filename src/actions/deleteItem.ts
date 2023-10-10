import axios from '@/libs/axios';

export default async function deleteItem(id: number) {
  try {
    await axios.delete(`/items/${id}`);
    return { ok: true };
  } catch (error) {
    console.log(error);
    return { ok: false };
  }
}