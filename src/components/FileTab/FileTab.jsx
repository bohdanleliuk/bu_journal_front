import React from 'react';
import styles from './FileTab.module.scss';
import { IconAttach } from '../../assets/icons';
import { ButtonIcon } from '../../ui';
import Tab from '../../ui/Tab/Tab';

const FileTab = () => {
  return (
    <Tab>
        <ButtonIcon text="file.png" icon={IconAttach}/>
    </Tab>
  )
}

export default FileTab