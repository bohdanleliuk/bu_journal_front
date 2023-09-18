import React from 'react';
import styles from './TextSign.module.scss';

const TextSign = ({children}) => {
  return (
    <div className={styles.textSign}>{children}</div>
  )
}

export default TextSign