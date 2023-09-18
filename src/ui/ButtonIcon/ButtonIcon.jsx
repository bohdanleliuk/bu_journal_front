import React from 'react';
import styles from './ButtonIcon.module.scss';
import MainText from '../Text/MainText/MainText';

const ButtonIcon = ({text, icon}) => {
  return (
    <div className={styles.buttonIconContainer}>
        {text && <MainText>{text}</MainText>}
        <div className={styles.icon}>
          <img src={icon}/>
        </div>
    </div>
  )
}

export default ButtonIcon