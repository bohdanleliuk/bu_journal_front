import React from 'react';
import './CardDate.scss';

const CardDate = ({date}) => {

  const d = new Date(date);

  return (
    <div className="lesson-card-date">
        <div>{`${d.getDate()}.${d.getMonth()}`}</div>
        <div>{`${d.getHours()}:${d.getMinutes()}`}</div>
      </div>
  )
}

export default CardDate