import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SuccessfulLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  });
  return <h2>You have successfully logged in! Redirecting to home!</h2>;
};

export default SuccessfulLogin;
