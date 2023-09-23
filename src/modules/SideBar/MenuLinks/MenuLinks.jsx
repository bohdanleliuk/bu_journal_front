import React from 'react';
import styles from './MenuLinks.module.scss';
import MenuItem from './MenuItem/MenuItem';
import {IconSubjects, IconShedule, IconContact} from '../../../assets/icons';
import { Link } from 'react-router-dom';

const MenuLinks = () => {
  return (
    <div className={styles.menu}>
        <MenuItem icon={IconSubjects} text="Предмети" link={'subjects'}/>
        <MenuItem icon={IconShedule} text="Розклад" link={'schedule'}/>
        <MenuItem icon={IconContact} text="Контакти" link={'contacts'}/>
    </div>
  )
}

export default MenuLinks