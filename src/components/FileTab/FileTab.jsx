import React from 'react';
import './FileTab.scss';
import Icon_attach from '../../assets/icons/Icon_attach.svg';
import ButtonIcon from '../Buttons/ButtonIcon/ButtonIcon';

const FileTab = () => {
  return (
    <div className='file-tab'>
        <ButtonIcon text="file.png" icon={Icon_attach}/>
    </div>
  )
}

export default FileTab