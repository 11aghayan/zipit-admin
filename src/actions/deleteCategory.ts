import axios from '@/libs/axios';

export default async function deleteCategory(id: string) {
  try {
    await axios.delete(`/categories/${id}`);
    return { ok: true };
  } catch (error) {
    console.log(error);
    return { ok: false };
  }
}