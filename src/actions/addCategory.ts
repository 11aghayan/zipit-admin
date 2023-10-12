import axios from '@/libs/axios';
import { LanguageStringType } from '@/types';

export default async function(body: { label: LanguageStringType }) {
  try {
    await axios.post('/categories', body);
    return { ok: true };
  } catch (error) {
    console.log(error);
    return { ok: false };
  }
}