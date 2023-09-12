import React from 'react';
import './ButtonIcon.scss';

const ButtonIcon = ({text, icon}) => {
  return (
    <div className='button-icon'>
        {text && <div className='button-icon-text'>{text}</div>}
        <div className='button-icon-icon'>
          <img src={icon}/>
        </div>
    </div>
  )
}

export default ButtonIcon