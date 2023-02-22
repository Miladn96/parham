import { NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={styles["navbar-container"]}>
      <div className={styles["logo"]}>M&P</div>
      <ul className={styles["navbar-items"]}>
        <li className={styles["navbar-item"]}>
          <NavLink to='/home' className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li className={styles["navbar-item"]}>
          <NavLink to='/about' className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
        </li>
        <li className={styles["navbar-item"]}>
          <NavLink to='/contact-us' className={({ isActive }) => (isActive ? "active" : "")}>
            Contact Us
          </NavLink>
        </li>
        <li className={styles["navbar-item"]}>
          <NavLink to='/skills' className={({ isActive }) => (isActive ? "active" : "")}>
            Skills
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
