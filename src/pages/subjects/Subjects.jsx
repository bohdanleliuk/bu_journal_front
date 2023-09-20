import React from 'react'
import { useState, useEffect } from 'react';
import styles from './Subjects.module.scss';
import { SubjectCard } from '../../components';
import axios from 'axios';


const Subjects = () => {

  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_SERVER_URL}/subjects`).then((res) => {
          let arr = Array.from([res.data, res.data]);
          setSubjects(arr);
        });
  }, []);

  return (
        <div className={styles.contentContainer}>
          <div className={styles.column}>
            {subjects.map((subject) => <SubjectCard subject={subject}/>)}
          </div>
          <div className={styles.column}>
            <SubjectCard/>
          </div>
        </div>
);
};

export default Subjects