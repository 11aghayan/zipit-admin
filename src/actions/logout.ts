import axios from '@/libs/axios';

export default async function() {
  try {
    await axios.get('/auth/logout', { withCredentials: true });
    return { ok: true };
  } catch (error) {
    console.log(error);
    return {ok: false};
  }
}