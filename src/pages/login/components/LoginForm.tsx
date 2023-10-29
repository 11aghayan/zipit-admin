import { useState } from "react";
import { useNavigate } from "react-router-dom";

import login from "@/actions/login";
import useAuthContext from "@/hooks/useAuthContext";

import LoginButton from "./LoginButton";
import LoginInputs from "./LoginInputs";

type Props = {
  from: string;
}

const LoginForm = ({ from }: Props) => {
  const navigate = useNavigate();

  const { setAuth } = useAuthContext();
  
  const [body, setBody] = useState({ username: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    setError('');
    e.preventDefault();

    if (!body.username) return setError('Username not provided');
    if (!body.password) return setError('Password not provided');
    
    login(body)
      .then(response => {
        if (!response?.ok) {
          setError(response.message);
        } else {
          setAuth({ loggedIn: true, accessToken: response.accessToken });
          navigate(from);
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <form 
      className="w-fit p-2"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <LoginInputs 
        body={body}
        setBody={setBody}
      />
      {error && <p className="text-center text-red-600 text-lg">{error}</p>}
      <LoginButton 
        isLoading={isLoading}
      />
    </form>
  );
};

export default LoginForm;