import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/success");
  };
  return (
    <div>
      <h1>Login 👋</h1>
      <p>Hello from Login!</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
