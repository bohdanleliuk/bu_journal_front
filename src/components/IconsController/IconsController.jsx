import React from 'react';
import styles from './IconsController.module.scss';
import {IconEdit, IconDelete, DownButton} from '../../assets/icons';
import { SimpleIcon } from '../../ui';

const IconsController = ({lesson, handleDropDown}) => {

  return (
    <div className={styles.iconsController}>
        <SimpleIcon icon={IconEdit} />
        <SimpleIcon icon={IconDelete} />
        <div onClick={handleDropDown}>
            <SimpleIcon icon={DownButton} />
        </div>
    </div>
  )
}

export default IconsController