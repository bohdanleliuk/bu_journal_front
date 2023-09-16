import React from 'react';
import './SimpleIcon.scss';

const SimpleIcon = ({icon}) => {;
  return (
    <div className='simple-icon'>
        <img src={icon}/>
    </div>
  )
};

export default SimpleIcon