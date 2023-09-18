import React from 'react';
import styles from './MainText.module.scss';

const MainText = ({children}) => {
  return (
    <div className={styles.text}>{children}</div>
  )
}

export default MainText