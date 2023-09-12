import React from 'react';
import './SubjectCard.scss';
import Icon_lessons from '../../../assets/icons/Icon_lessons.svg';
import Icon_journal from '../../../assets/icons/Icon_journal.svg';
import Icon_edit from '../../../assets/icons/Icon_edit.svg';
import Icon_delete from '../../../assets/icons/Icon_delete.svg';
import ButtonIcon from '../../Buttons/ButtonIcon/ButtonIcon';

const SubjectCard = ({subject, editAccess}) => {

  // console.log(subject.length);
  // if (subject.length >= 40) {
  //   subject = subject.slice(0, 37).concat('...');
  // }
  return (
    <div className='block'>
            <div className='title-container'>
                <div className='main-text'>{subject}</div>
            </div>
            <div className='icons-container'>
                <ButtonIcon icon={Icon_journal}/>
                <ButtonIcon icon={Icon_lessons}/>
                {editAccess && <ButtonIcon icon={Icon_edit}/>}
                {editAccess && <ButtonIcon icon={Icon_delete}/>}
            </div>
    </div>
  )
}

export default SubjectCard