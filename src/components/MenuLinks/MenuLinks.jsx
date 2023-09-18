import React from 'react';
import styles from './MenuLinks.module.scss';
import MenuItem from './MenuItem/MenuItem';
import {IconSubjects, IconShedule, IconContact} from '../../assets/icons';

const MenuLinks = () => {
  return (
    <div className={styles.menu}>
        <MenuItem icon={IconSubjects} text="Предмети" active={true}/>
        <MenuItem icon={IconShedule} text="Розклад" active={false}/>
        <MenuItem icon={IconContact} text="Контакти" active={false}/>
    </div>
  )
}

export default MenuLinks