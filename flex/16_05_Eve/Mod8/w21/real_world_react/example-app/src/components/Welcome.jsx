import styled from "styled-components";
import { useTheme } from "../contexts/useTheme";

const Paragraph = styled.p`
  color: pink;
  font-size: 24px;
  text-decoration: underline;
`;

function Welcome() {
  const { themeToggle } = useTheme();

  return (
    <div className={`wrapper ${themeToggle ? "dark" : "light"} `}>
      <Paragraph>I look soooo good!</Paragraph>
      <h1>Welcome 👋</h1>
      <p>Hello from welcome!</p>
    </div>
  );
}

export default Welcome;
