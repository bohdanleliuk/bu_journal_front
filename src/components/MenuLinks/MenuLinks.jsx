import React from 'react';
import './MenuLinks.scss';
import MenuItem from './MenuItem/MenuItem';

const MenuLinks = () => {
  return (
    <div className='menu'>
        <MenuItem icon="icon" text="Предмети" active={true}/>
        <MenuItem icon="icon" text="Розклад" active={false}/>
        <MenuItem icon="icon" text="Контакти" active={false}/>
    </div>
  )
}

export default MenuLinks