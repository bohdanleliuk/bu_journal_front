import React from "react";
import styles from "./MenuItem.module.scss";
import { NavLink } from "react-router-dom";

const MenuItem = ({ icon, text, link }) => {
  return (
    <NavLink
      to={link}
      style={{'textDecoration': 'none', 'cursor': 'pointer'}}
      className={({ isActive, isPending }) =>
        isPending ? styles.menuItem  : isActive ? [styles.menuItem, styles.active].join(" ") : styles.menuItem
      }
    >
      <img src={icon} width='24px' height='24px' alt={`${icon.name}`} />
      <div className={styles.text}>{text}</div>
    </NavLink>
  );
};

export default MenuItem;
