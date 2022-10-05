import { useTheme } from "../contexts/useTheme";

function Login() {
  const { themeToggle } = useTheme();

  return (
    <div className={`wrapper ${themeToggle ? "dark" : "light"}`}>
      <h1>Login 👋</h1>
      <p>Hello from Login!</p>
    </div>
  );
}

export default Login;
