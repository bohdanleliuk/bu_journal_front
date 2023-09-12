import React from 'react';
import './MenuLinks.scss';
import MenuItem from './MenuItem/MenuItem';
import SubjectsIcon from '../../assets/icons/Icon_subjects.svg';
import ScheduleIcon from '../../assets/icons/Icon_schedule.svg';
import ContactIcon from '../../assets/icons/Icon_contact.svg';

const MenuLinks = () => {
  return (
    <div className='menu'>
        <MenuItem icon={SubjectsIcon} text="Предмети" active={true}/>
        <MenuItem icon={ScheduleIcon} text="Розклад" active={false}/>
        <MenuItem icon={ContactIcon} text="Контакти" active={false}/>
    </div>
  )
}

export default MenuLinks