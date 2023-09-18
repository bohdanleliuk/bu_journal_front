import React from 'react';
import styles from './CardDate.module.scss';

const CardDate = ({date}) => {

  const d = new Date(date);

  return (
    <div className={styles.lessonCardDate}>
        <div>{`${d.getDate()}.${d.getMonth()}`}</div>
        <div>{`${d.getHours()}:${d.getMinutes()}`}</div>
      </div>
  )
}

export default CardDate