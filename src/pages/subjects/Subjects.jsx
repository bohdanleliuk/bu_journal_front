import React from 'react'
import { useState, useEffect } from 'react';
import response from "../../testdata/subjects";
import { SubjectCard } from '../../components';
import styles from './Subjects.module.scss';

const Subjects = () => {

    const [editAccess, setEditAccess] = useState(true);
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        response.then((res) => {
          setSubjects(res);
        });
      }, []);


  return (
        <div className={styles.contentContainer}>
          <div className={styles.column}>
            <SubjectCard/>
          </div>
          <div className={styles.column}>
            <SubjectCard/>
          </div>
        </div>
);
};

export default Subjects