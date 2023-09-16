import React from 'react';
import './IconsController.scss';
import ButtonIcon from '../../ui/ButtonIcon/ButtonIcon';
import Icon_edit from '../../assets/icons/Icon_edit.svg';
import Icon_delete from '../../assets/icons/Icon_delete.svg';
import Down_button from '../../assets/icons/Down_button.svg';

const IconsController = ({lesson, handleDropDown}) => {

    console.log(handleDropDown);

  return (
    <div className='icons-controller'>
        <ButtonIcon icon={Icon_edit} />
        <ButtonIcon icon={Icon_delete} />
        <div onClick={handleDropDown}>
            <ButtonIcon icon={Down_button} />
        </div>
    </div>
  )
}

export default IconsController