import { useState } from "react";
import LoginButton from "./LoginButton";
import LoginInputs from "./LoginInputs";

const LoginForm = () => {
  const [body, setBody] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setError('');
    e.preventDefault();

    if (!body.username) return setError('Username not provided');
    if (!body.password) return setError('Password not provided');
    
    console.log(body);
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
      <LoginButton />
    </form>
  );
};

export default LoginForm;