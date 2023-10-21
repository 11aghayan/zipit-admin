type Props = {
  body: {
    username: string;
    password: string;
  };
  setBody: React.Dispatch<React.SetStateAction<{
    username: string;
    password: string;
  }>>;
};

const LoginInputs = ({ body, setBody }: Props) => {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBody(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));  
  };
  
  return (
    <section>
      <div>
        <label htmlFor="username">
          Username
        </label>
        <input 
          type="text" 
          name="username" 
          id="username"
          value={body.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">
          Password
        </label>
        <input 
          type="password" 
          name="password" 
          id="password" 
          value={body.password}
          onChange={handleChange}
        />
      </div>
    </section>
  );
};

export default LoginInputs;