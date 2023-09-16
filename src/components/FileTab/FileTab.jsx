import React from 'react';
import './FileTab.scss';
import Icon_attach from '../../assets/icons/Icon_attach.svg';
import ButtonIcon from '../../ui/ButtonIcon/ButtonIcon';
import Tab from '../../ui/Tab/Tab';

const FileTab = () => {
  return (
    <Tab>
        <ButtonIcon text="file.png" icon={Icon_attach}/>
    </Tab>
  )
}

export default FileTab