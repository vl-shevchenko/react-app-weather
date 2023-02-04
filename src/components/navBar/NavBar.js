import { NavLink } from 'react-router-dom';
import './navBar.scss';

function NavBar() {
  const activeLink = 'navBar__link navBar__link--active';
  const normalLink = 'navBar__link';

  return (
    <nav className="navBar">
      <ul className="navBar__wrapper">
        <li className="navBar__list">
          <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
            Today
          </NavLink>
        </li>
        <li className="navBar__list">
          <NavLink to="/tomorrow" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
            Tomorrow
          </NavLink>
        </li>
        <li className="navBar__list">
          <NavLink to="/hourly" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
            Hourly
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
