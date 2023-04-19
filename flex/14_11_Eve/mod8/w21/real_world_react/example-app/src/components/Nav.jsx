import { Link } from "react-router-dom";
import { useTheme } from "../contexts/useTheme";

const Nav = () => {
  const { themeToggle, handleThemeToggle } = useTheme();
  return (
    <div className={`navbar ${themeToggle ? "dark" : "light"}`}>
      <h2>This is Nav Component</h2>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <button className="theme-toggler" onClick={handleThemeToggle}>
        Theme: {themeToggle ? "🌚" : "🌞"}
      </button>
    </div>
  );
};

export default Nav;
