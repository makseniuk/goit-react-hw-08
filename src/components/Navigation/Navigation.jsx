import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from './Navigation.module.css'

const activeLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active);
};

const Navigation = () => {
     const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.nav}>
      <NavLink className={activeLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={activeLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  )
}

export default Navigation