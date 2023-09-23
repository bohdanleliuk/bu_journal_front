import React from 'react'
import { useState, useEffect } from 'react';
import styles from './Subjects.module.scss';
import { SubjectCard } from '../../components';
import axios from 'axios';


const Subjects = () => {

  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_SERVER_URL}/subjects`).then((res) => {
          let arr = createArrayOfSubjects(res.data, 50);
          arr = createTwoColumnArray(arr);
          setSubjects(arr);
        });
  }, []);

  return (
        <div className={styles.contentContainer}>
          <div className={styles.column}>
            {subjects[0]?.map((subject) => <SubjectCard key={subject.id} subject={subject}/>)}
          </div>
          <div className={styles.column}>
            {subjects[1]?.map((subject) => <SubjectCard key={subject.id} subject={subject}/>)}
          </div>
        </div>
);
};

const createArrayOfSubjects = (subject, count) => {
  let arr =[];
  for (let i = 0; i < count; i++) {
    let newSubject = JSON.parse(JSON.stringify(subject));
    newSubject.id = 'Very Important Subject ' + Number.parseInt(Math.random()*1000000);
    arr.push(newSubject);
  }
  return arr;
}

const createTwoColumnArray = (arr) => {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    i % 2 == 0 ? arr1.push(arr[i]) : arr2.push(arr[i]);
  }
  return [arr1, arr2];
}

export default Subjects