import React, { useRef } from 'react'
import { useState, useEffect } from 'react';
import styles from './Subjects.module.scss';
import { SubjectCard } from '../../components';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { getAllSubjects } from '../../redux/thunks';


const Subjects = () => {

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllSubjects());
  // }, []);

  let subjects = useSelector((store) => store.subjects);

  return (
        <div className={styles.contentContainer}>
          
          <div className={styles.column}>
            {subjects?.map((subject) => <SubjectCard key={subject.id} subject={subject}/>)}
          </div>
          <div className={styles.column}>
            {subjects?.map((subject) => <SubjectCard key={subject.id} subject={subject}/>)}
          </div>
        </div>
);
};

const createTwoColumnArray = (arr) => {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    i % 2 == 0 ? arr1.push(arr[i]) : arr2.push(arr[i]);
  }
  return [arr1, arr2];
}

export default Subjects