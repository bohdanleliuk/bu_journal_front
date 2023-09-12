import React from 'react';
import './MenuItem.scss';

const MenuItem = ({icon, text, active}) => {
  return (
    <div className={ !active ? 'menu-item' : 'menu-item active'}>
        <img src={icon} alt={`${icon.name}`}/>
        <div className='text'>{text}</div>
    </div>
  )
}

export default MenuItem