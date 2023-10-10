import axios from '@/libs/axios';

export default async function(body: {label: string}) {
  try {
    await axios.post('/categories', body);
    return { ok: true };
  } catch (error) {
    console.log(error);
    return { ok: false };
  }
}