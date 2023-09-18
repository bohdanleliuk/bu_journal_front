import React from 'react';
import styles from './SimpleIcon.module.scss';

const SimpleIcon = ({icon}) => {;
  return (
    <div className={styles.simpleIcon}>
        <img src={icon}/>
    </div>
  )
};

export default SimpleIcon