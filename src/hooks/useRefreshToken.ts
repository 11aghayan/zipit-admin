import axios from "@/libs/axios";
import useAuthContext from "./useAuthContext";

export default function () {
  const { setAuth } = useAuthContext();

  const refresh = async () => {
    const response = await axios.get('/auth/refresh', { withCredentials: true});
    if (response.status === 200) {
      setAuth({ loggedIn: true, accessToken: response.data.accessToken });
      return response.data.accessToken;
    }
  };
  return refresh;
}