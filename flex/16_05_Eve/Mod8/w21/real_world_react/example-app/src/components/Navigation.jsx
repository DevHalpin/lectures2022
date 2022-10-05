import { Link, Outlet, useNavigate } from "react-router-dom";
import {useTheme} from '../contexts/useTheme';

function Navigation() {
    const navigate = useNavigate();
    const { themeToggle, handleThemeToggle } = useTheme()

    // const handleClick = () => {
    //     navigate('/about')
    // }

  return (
    <>
      <div className={`navbar ${themeToggle ? 'dark' : 'light'}`}>
        <ul className="navbar-menu">
          <li>
            <Link to="/">Welcome</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        {/* <button onClick={handleClick}>That is totally going to work!</button> */}
        <button className="theme-toggler" onClick={handleThemeToggle}>Theme: { themeToggle ? '🌚' : '🌞' }</button>
      </div>

      <Outlet />
    </>
  );
}

export default Navigation;
