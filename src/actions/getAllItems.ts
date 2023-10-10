import axios from '@/libs/axios';

export default async function getAllItems() {
  try {
    const { data } = await axios.get('/admin/items');
    return data;
  } catch(err) {
    console.log(err);
    return [];
  }
}