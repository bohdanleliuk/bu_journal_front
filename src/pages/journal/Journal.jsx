import React from 'react';
import styles from './Journal.module.scss';
import { useParams } from 'react-router-dom';

const Journal = () => {

  const { subjectId } = useParams();

  return (
    <div>Journal {subjectId}</div>
  )
}

export default Journal