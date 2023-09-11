import React from 'react';
import './SubjectCard.scss';
import Icon_lessons from '../../../assets/icons/Icon_lessons.svg';
import Icon_journal from '../../../assets/icons/Icon_journal.svg';
import Icon_edit from '../../../assets/icons/Icon_edit.svg';
import Icon_delete from '../../../assets/icons/Icon_delete.svg';

const SubjectCard = ({subject, type, editAccess}) => {

  // console.log(subject.length);
  // if (subject.length >= 40) {
  //   subject = subject.slice(0, 37).concat('...');
  // }
  return (
    <div className='block'>
            <div className='title-container'>
                <div className='main-text'>{subject}</div>
                <div className='sign'>{type}</div>
            </div>
            <div className='icons-container'>
                <img src={Icon_journal} alt='icon journal'/>
                <img src={Icon_lessons} alt='icon lessons'/>
                {editAccess && <img src={Icon_edit} alt='icon edit'/>}
                {editAccess && <img src={Icon_delete} alt='icon delete'/>}
            </div>
    </div>
  )
}

export default SubjectCard