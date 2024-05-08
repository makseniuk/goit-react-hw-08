import { NavLink } from "react-router-dom";
import clsx from 'clsx';
import css from './AuthNav.module.css'
const activeLinkClass = ({ isActive }) => {
    return clsx(css.navLink, isActive && css.active);
}

const AuthNav = () => {
  return (
      <div className={css.wrapper}>
      <NavLink className={activeLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={activeLinkClass} to="/login">
        Log In
      </NavLink>
    </div>
  )
}

export default AuthNav