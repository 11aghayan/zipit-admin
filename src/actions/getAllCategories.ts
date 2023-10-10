import axios from '@/libs/axios';

export default async function getAllCategories() {
  try {
    const { data } = await axios.get('/admin/categories');
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}