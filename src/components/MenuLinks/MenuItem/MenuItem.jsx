import React from 'react';
import styles from './MenuItem.module.scss';

const MenuItem = ({icon, text, active}) => {
  return (
    <div className={ !active ? styles.menuItem : [styles.menuItem, styles.active].join(' ')}>
        <img src={icon} alt={`${icon.name}`}/>
        <div className={styles.text}>{text}</div>
    </div>
  )
}

export default MenuItem