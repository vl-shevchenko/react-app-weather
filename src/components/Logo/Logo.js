import { NavLink } from 'react-router-dom';
import './logo.scss';

const Logo = () => {
  return (
    <NavLink to="/">
      <p className="logo">
        reactweather<span className="logo__span">.com</span>
      </p>
    </NavLink>
  );
};
export default Logo;
