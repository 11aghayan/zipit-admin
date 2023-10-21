import LoginForm from "./components/LoginForm";

const Login = () => {
  
  return (
    <main className="absolute inset-0 flex items-center justify-center p-1">
      <h2 className="absolute top-3 left-1/2 -translate-x-1/2 text-6xl font-semibold text-gray-700">
        ZipIT
      </h2>
      <LoginForm />
    </main>
  );
};

export default Login;