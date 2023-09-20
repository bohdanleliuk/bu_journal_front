import React from 'react'
import { useState, useEffect } from 'react';
import styles from './Subjects.module.scss';
import { SubjectCard } from '../../components';
import axios from 'axios';


const Subjects = () => {

    console.log(process.env.REACT_APP_API_SERVER_URL);

    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_SERVER_URL}/subjects`).then((res) => setSubjects(res));
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